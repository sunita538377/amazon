import React, { useState, useEffect, useRef } from "react";
// import logo from "../Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faPlay,
  faPause,
  faForwardStep,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { useSongContext } from "../context/songContext";


const MusicPlayer = () => {
  const [playMusic, setPlayMusic] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const {
    currentSongs,
    setCurrentSongs,
    activeSong,
    setActiveSong,
    songPlayed,
    setSongPlayed,
    isPaused,
    setIsPaused,
  } = useSongContext();
  const audioRef = useRef();

  const togglePlayPause = () => {
    setIsPlaying((prev) => {
      if (prev) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        console.log("audio", audioRef.current);
      }
      return !prev;
    });
    audioRef.current.play();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
    // playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef]);

 
  // useEffect(() => {
  //   const getData = async () => {
  //     const responce = await fetch(
  //       "https://academics.newtonschool.co/api/v1/music/album/:id",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTgzMGU2OTI5YjliMTBjMDMyMTA2MSIsImlhdCI6MTY5NjI3MTU4MSwiZXhwIjoxNzI3ODA3NTgxfQ.GnDNX8kmlVllmbINOx04uTBoAukdMBg_MRDVjQR0IrA`,
  //           projectId: "f104bi07c490",
  //         },
  //       }
  //     );
  //     const data = await responce.json();
  //     setPlayMusic(data.data);
  //   };
  //   getData();
  // }, []);
  console.log("haul",currentSongs)
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        height: "80px",
        backgroundColor: "black",
        opacity: "30",
        color: "white",
        display: "flex",
        alignItems: "center",
        border: "2px solid red",
        bottom: "0",
      }}
    >
      <audio
        src={currentSongs?.audio_url}
        ref={audioRef}
        // onLoadedMetadata={onLoadedMetadata}
      />
      <div style={{ width: "25%", display: "flex", alignItems: "center",padding:"0 10px" }}>
        <img
          src={currentSongs?.thumbnail}
          alt="currentSongThumbnail"
          style={{ height: "55px", width: "55px", borderRadius: "2px",paddingRight:"3px"}}
        />
        {/* <img src={logo} alt="Logo" /> */}
        <div>
          <div> {currentSongs?.title}</div>
          <div>
            {currentSongs?.artist?.length > 0 &&
              currentSongs?.artist[0].name}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="flex w-1/3 justify-between items-center"
          style={{
            display: "flex",
            width: "20%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <FontAwesomeIcon icon={faBackwardStep} />
          </div>
          <div onClick={togglePlayPause}>
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </div>
          <div>
            <FontAwesomeIcon icon={faForwardStep} />
          </div>
        </div>
      </div>
      <div style={{ width: "25%", display: "flex", alignItems: "flex-end" }}>
        {/* <img src={logo} alt="Logo" /> */}
        <div>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
