import React, { useEffect } from 'react'
import TruncatedText from '../components/Trunck'
import { useSongContext } from '../context/songContext';
import { Howl, Howler } from "howler";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlay,
//   faEllipsis,
 
// } from "@fortawesome/free-solid-svg-icons";

const Card = ({imgUrl,title,name,item,index}) => {
  const { currentSongs, setCurrentSongs, activeSong, setActiveSong } =  useSongContext();

  useEffect(() => {
    // Create the Howl instance when the component mounts
    if (currentSongs.length > 0 && Array.isArray(currentSongs[0]?.songs)) {
      const sound = new Howl({
        src: [currentSongs[activeSong]?.audio_url],
        html5: true,
        onend: () => {
          if (activeSong < currentSongs.length - 1) {
            // const nextSong = currentSongs[0]?.songs[activeSong];
            setActiveSong((prev) => prev + 1);

            sound.stop();
            sound.unload();
            sound.play();
          }
        },
      });

      // setSongDuartion(sound);

      // Cleanup the Howl instance on component unmount
      return () => {
        sound.unload();
      };
    }
  }, [currentSongs?.audio_url, setCurrentSongs]);
  const handleSongSelection = (item,index) => {
    setCurrentSongs(item);
    setActiveSong(index);
  };
  console.log("Sunita",item);
  console.log("index",index);
  return (
    <div style={{background:"black", width:"180px" , margin:"5px", borderRadius:"10px",padding:"10px"}}
    onClick={() => {
      handleSongSelection(item,index);
    }}>
          <div style={{width:"100%",position:"relative"}}>
              <img style={{width:166 , borderRadius:"10px",height:166}}
              src={imgUrl}
               alt="label"/>  
          </div>
          {/* <div className='container' style={{position:"absolute"}}>
                  <div className='play' >
                    <button >
                        <FontAwesomeIcon icon={faPlay} style={{fontSize:"30px",top:"30%",left:"50%"}} />
                    </button>
                  </div>
                  <div className='more'>
                    <button >
                        <FontAwesomeIcon icon={faEllipsis} />
                    </button> 
                  </div>
               </div>
          
          <div> */}
          {/* <div style={{width:"100%",display:"flex",flexWrap:"wrap" , overflow:"hidden",textOverflow: "ellipsis"}}>{title}</div> */}
          {/* <div style={{width:"100%" ,overflow:"hidden",textOverflow: "clip"}}>{name}</div> */}
          <TruncatedText paragraph={title} limit={17}/>
          <TruncatedText paragraph={name} limit={17}/>
          
          

     </div>
  )
}

export default Card