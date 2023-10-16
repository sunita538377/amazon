import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {
  const [songData,setSongData] = useState([]);

  useEffect(()=>{
    const getData=async()=>{
        const responce=await fetch('https://academics.newtonschool.co/api/v1/music/song', {
            method:"GET",
            headers: {
                "Content-Type":"application/json",
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTgzMGU2OTI5YjliMTBjMDMyMTA2MSIsImlhdCI6MTY5NjI3MTU4MSwiZXhwIjoxNzI3ODA3NTgxfQ.GnDNX8kmlVllmbINOx04uTBoAukdMBg_MRDVjQR0IrA`,
                'projectId': 'f104bi07c490',
               
            }
        })
        const data=await responce.json();
        setSongData(data.data);
      }
      getData();
  },[]);
  return (
    <div className='home' style={{backgroundColor:"black",width:"100vw"}}>
       <PlaylistView titleText={"Featured This week"} cardsData={songData}/>
    </div>
    
  )
}
const PlaylistView = ({titleText,cardsData}) =>{
  return (
  <div style={{color:"white", marginTop:"8px",margin:"10px",width:"100%"}}>
      <div  style={{display:"flex" , justifyContent:"space-between" ,flexWrap:"wrap",fontSize:"1.5rem" ,marginBottom:"5px",fontWeight:"bold",paddingTop:"10px",paddingBottom:"10px"}}>
          {titleText}
          <div style={{fontSize:"0.8rem",width:"100px",backgroundColor:"rgb(41,41,41)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px"}}>
              <Link to={"/details"} style={{cursor:"pointer",color:"white"}}>Select All</Link>
          </div>
      </div>
      <div  style={{display:"flex" , justifyContent:"space-between",flexWrap:"wrap" , width:"100%"}}>
          {
               cardsData.map((item)=>{ 
                  return (
                      <Card
                          title={item.title}
                          name={item.artist[0].name}
                          imgUrl={item.thumbnail}
                      />
                  )
             })
        }
      </div>
  </div>
  )
};
const Card = ({title,name,imgUrl}) =>{
  return(
      <div style={{background:"black", width:"180px" , margin:"5px", borderRadius:"10px"}}>
          <div style={{width:"100%"}}>
              <img style={{width:"100%" , borderRadius:"10px"}}
              src={imgUrl}
               alt="label"/>
          </div>
          <div style={{width:"100%" , overflow:"hidden"}}>{title}</div>
          <div style={{width:"100%" ,overflow:"hidden"}}>{name}</div>
      </div>
  )
}
export default Home