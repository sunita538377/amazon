import React, { useState,useEffect } from 'react'
import Card from './Card'

const HappySong = () => {
    const [happySong,setHappySong] = useState([]);
    

    useEffect(()=>{
        const getData=async()=>{
            const responce=await fetch('https://academics.newtonschool.co/api/v1/music/song?limit=100', {
                method:"GET",
                headers: {
                    "Content-Type":"application/json",
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTgzMGU2OTI5YjliMTBjMDMyMTA2MSIsImlhdCI6MTY5NjI3MTU4MSwiZXhwIjoxNzI3ODA3NTgxfQ.GnDNX8kmlVllmbINOx04uTBoAukdMBg_MRDVjQR0IrA`,
                    'projectId': 'f104bi07c490',
                }
            })
            const data=await responce.json();
            setHappySong(data.data);
        }
        getData();
    },[]) 
    
  return (
    <div style={{color:"white",padding:"15px"}}>
        <h2 style={{paddingLeft:"15px"}}>Happy Song</h2>
        <div  style={{color:"white",display:"flex", justifyContent:"space-between",flexWrap:"wrap" , width:"100%"}}>
            {happySong.filter((song)=>{ return song.mood==="happy"})
            .map((item)=>{ 
                        return (
                            <Card
                                title={item.title}
                                name={item.artist[0]?.name}
                                imgUrl={item.thumbnail}
                            />
                        )
                    })}
        </div>
    </div>
  )
}

export default HappySong