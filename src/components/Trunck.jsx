import React, { useState } from "react";

const TruncatedText = ({ paragraph, limit }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncateText = (text, characterLimit) => {
    if (text && text.length > characterLimit) {
      const words = text.split(/[\s_]+/);

      let truncatedText = "";

      let count = 0;

      for (let i = 0; i < words.length; i++) {
        if (count + words[i].length <= characterLimit) {
          truncatedText += words[i] + " ";

          count += words[i].length + 1;
        } else {
          break;
        }
      }

      return truncatedText.trim() + "...";
    }

    return text;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const truncatedText = truncateText(paragraph, limit);

  return (
    <span
      title={isHovered ? paragraph : null}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {truncatedText}
    </span>
  );
};

export default TruncatedText;
