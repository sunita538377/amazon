import React, { useState,useEffect } from 'react'
import Card from './Card'

const AlbumData = () => {
    const [albumData,setAlbumData] = useState([]);
    
    useEffect(()=>{
        const getData=async()=>{
            const responce=await fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
                method:"GET",
                headers: {
                    "Content-Type":"application/json",
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTgzMGU2OTI5YjliMTBjMDMyMTA2MSIsImlhdCI6MTY5NjI3MTU4MSwiZXhwIjoxNzI3ODA3NTgxfQ.GnDNX8kmlVllmbINOx04uTBoAukdMBg_MRDVjQR0IrA`,
                    'projectId': 'f104bi07c490',
                   
                }
            })
            const data=await responce.json();
            setAlbumData(data.data);
          }
          getData();
      },[]);
    
  return (
    <div style={{color:"white",padding:"15px"}}>
        <h2 style={{paddingLeft:"15px"}}>Popular Album</h2>
        <div  style={{color:"white",display:"flex", justifyContent:"space-between",flexWrap:"wrap" , width:"100%"}}>
        {albumData.map((item)=>{
                      return (
                        <Card
                            title={item.title}
                            name={item.artists[0].name}
                            imgUrl={item.image}
                        />

                    )
                })
            }
        </div>
    </div>
  )

}

export default AlbumData