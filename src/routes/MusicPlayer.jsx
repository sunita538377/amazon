import React, { useState ,useEffect} from "react";
// import logo from "../Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEllipsis,
  faRepeat,
  faBackwardStep,
  faPlay,
  faPause,
  faForwardStep,
  faShuffle
} from "@fortawesome/free-solid-svg-icons";

const MusicPlayer = () => {
const [ playMusic,setPlayMusic]=useState()

  useEffect(()=>{
    const getData=async()=>{
        const responce=await fetch('https://academics.newtonschool.co/api/v1/music/album/:id', {
            method:"GET",
            headers: {
                "Content-Type":"application/json",
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTgzMGU2OTI5YjliMTBjMDMyMTA2MSIsImlhdCI6MTY5NjI3MTU4MSwiZXhwIjoxNzI3ODA3NTgxfQ.GnDNX8kmlVllmbINOx04uTBoAukdMBg_MRDVjQR0IrA`,
                'projectId': 'f104bi07c490',
               
            }
        })
        const data=await responce.json();
        setPlayMusic(data.data);
      }
      getData();
  },[]);
  return (
    <div style={{width:"100%" ,height:"80px",backgroundColor:"black",opacity:"30",color:"white",display:"flex",alignItems:"center",border:"2px solid red",bottom:"0"}}>
      <div className="w-1/4 flex items-center" style={{width:"25%",display:"flex",alignItems:"center"}}>
        {/* <img src={logo} alt="Logo" /> */}
        <div>
          <div>title</div>
          <div>srtist</div>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center flex-col items-center" style={{width:"1/2" , height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="flex w-1/3 justify-between items-center" style={{display:"flex", width:"1/3",justifyContent:"space-between",alignItems:"center"}}> 
              <div>
               <FontAwesomeIcon icon={faThumbsUp}/>
               <FontAwesomeIcon icon={faEllipsis} />
              </div>
              <div>
                <FontAwesomeIcon icon={faRepeat} />
                <FontAwesomeIcon icon={faBackwardStep} />
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faPause} />
                <FontAwesomeIcon icon={faForwardStep} />
                <FontAwesomeIcon icon={faShuffle} />
              </div>
         </div>
      </div>
    </div>
  )
}

export default MusicPlayer