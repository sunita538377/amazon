
import React from 'react'
import { Link } from "react-router-dom";


const Search = () => {
  return (
    <div style={{color:"white"}}>
      <Link to={"/podcasts"} style={{color:"white"}}>
       <div style={{padding:"30px",display:"flex"}}>
       <button className="btn">Podcasts</button>
       </div>
      </Link>
      <h2 style={{paddingLeft:"30px"}}>Moods & Activities</h2>
      <div  style={{display:"flex",justifyContent:"space-evenly",flexWrap:"initial",paddingTop:"15px"}}>
        <div className='first' style={{backgroundColor:"red",padding:"20px",paddingLeft:"120px",paddingRight:"120px",fontSize:"30px",fontWeight:"bolder",borderRadius:"10px"}}>Sad</div>
        <div className='second' style={{backgroundColor:"red",padding:"20px",paddingLeft:"120px",paddingRight:"120px",fontSize:"30px",fontWeight:"bolder",borderRadius:"10px"}}>Happy</div>
        <div className='third' style={{backgroundColor:"red",padding:"20px",paddingLeft:"120px",paddingRight:"120px",fontSize:"30px",fontWeight:"bolder",borderRadius:"10px"}}>Romantic</div>
        <div className='fourth' style={{backgroundColor:"red",padding:"20px",paddingLeft:"120px",paddingRight:"120px",fontSize:"30px",fontWeight:"bolder",borderRadius:"10px"}}>Excited</div>
      </div>
    </div>
  )
}

export default Search