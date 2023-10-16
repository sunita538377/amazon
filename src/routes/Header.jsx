import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Images/logo.svg";
import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPodcast,
  faHeadphonesSimple,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import DropDown from "../components/DropDown";


// import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const location = useLocation();
  const pathName = location.pathname;
  const [searchText,setSearchText] = useState("");
  const [isInputFocused,setIsInputFocused] = useState(false);
  const [songData,setSongData] = useState([]);
 const navigate = useNavigate()
  
    const searchSong=async()=>{
        const responce=await fetch('https://academics.newtonschool.co/api/v1/music/song?search={"title":"${searchText}"}', {
            method:"GET",
            headers: {
                "Content-Type":"application/json",
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTgzMGU2OTI5YjliMTBjMDMyMTA2MSIsImlhdCI6MTY5NjI3MTU4MSwiZXhwIjoxNzI3ODA3NTgxfQ.GnDNX8kmlVllmbINOx04uTBoAukdMBg_MRDVjQR0IrA`,
                'projectId': 'f104bi07c490',
               
            }
        })
        const data=await responce.json();
        setSongData(data.data);
        navigate("/search",{state:{data:songData}})
      }
      
  

  return (
    <>
      {pathName != "/login" && (
        <nav>
          <main>
            <div
              style={{ display: "flex", color: "white", alignItems: "center",gap:"24px" }}
            >
              <h1 style={{paddingTop:"10px"}}>
                <img src={logo} alt="Logo" />
              </h1>
              <div className="icons" >
                <Link to={"/"} style={{color:"white"}}>
                  <FontAwesomeIcon icon={faHouse} /> HOME
                </Link>
              </div>
              <div className="icons">
                <Link to={"/podcasts"} style={{color:"white"}}>
                  <FontAwesomeIcon icon={faPodcast} /> PODCASTS
                </Link>
              </div>
              <div className="icons">
                <Link to={"/library"} style={{color:"white"}}>
                  <FontAwesomeIcon icon={faHeadphonesSimple} />
                  <DropDown />
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="search" style={{width:"230px",border:"1px solid white",backgroundColor:"white",padding:"0.5px",display:"flex",flexDirection:"column",borderRadius:"30px",justifyContent:"space-between"}}>
              <Link to={"/search"}>
                 <input type="text" placeholder="Search" style={{border:"none"}}
                 onFocus={()=>{
                  setIsInputFocused(true);
              }} onBlur={()=>{
                  setIsInputFocused(false);
              }} value={searchText}
              onChange={(e) => {
                  setSearchText(e.target.value);
              }}
              onKeyDown={(e) => {
                  if (e.key === "Enter") {
                      searchSong();
                  }
              }}/>
                <SearchIcon /> 
              </Link>
              </div>
              <div
                style={{
                  border: "1px solid white",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  marginLeft: "15px",
                  color:"white",
                  backgroundColor:"rgb(49,49,49)"
                }}
              >
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
          </main>
        </nav>
      )}

      <div style={{ border: "1px solid rgb(41,42,42)", width: "100vw" }}></div>
    </>
  );
}
