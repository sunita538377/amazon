import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MusicPlayer from './MusicPlayer';

function Home() {
  const [songData,setSongData] = useState([]);
  const [sadSong,setSadSong] = useState([]);
  const [happySong,setHappySong] = useState([]);
  const [romanticSong,setRomanticSong]=useState([]);
  const [excitedSong,setExcitedSong]=useState([]);
  const [albumData,setAlbumData] = useState([]);
  const [albumIndex,setAlbumIndex]=useState(0);
  const [sadIndex,setSadIndex]=useState(0);
  const [happyIndex,setHappyIndex]=useState(0);
  const [romanticIndex,setRomanticIndex]=useState(0);
  const [excitedIndex,setExcitedIndex]=useState(0);


  function albumNext(){setAlbumIndex((pre)=>pre+1)}
  function albumPre(){setAlbumIndex((pre)=> pre-1)}
  function sadNext(){setSadIndex((pre)=>pre+1)}
  function sadPre(){setSadIndex((pre)=> pre-1)} 
  function happyNext(){setHappyIndex((pre)=>pre+1)}
  function happyPre(){setHappyIndex((pre)=> pre-1)} 
  function romanticNext(){setRomanticIndex((pre)=>pre+1)}
  function romanticPre(){setRomanticIndex((pre)=> pre-1)} 
  function excitedNext(){setExcitedIndex((pre)=>pre+1)}
  function excitedPre(){setExcitedIndex((pre)=> pre-1)} 
    
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
        setSongData(data.data);
        const songs = data.data;
        const filterSad = songs.filter((item)=>item.mood==="sad")
        setSadSong(filterSad)
        console.log(filterSad);
        const filterHappy = songs.filter((item)=>item.mood==="happy")
        setHappySong(filterHappy);
        console.log(filterHappy)
        const filterRomantic = songs.filter((item)=>item.mood==="romantic")
        setRomanticSong(filterRomantic);
        console.log(filterRomantic)
        const filterExcited = songs.filter((item)=>item.mood==="excited")
        setExcitedSong(filterExcited);
        console.log(filterExcited)
        console.log(data.data);
      }
      getData();
  },[]);
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
    <div className='home' style={{backgroundColor:"black",width:"100vw"}} >
       <div style={{color:"white", marginTop:"8px",margin:"10px",width:"100%"}}>
            <div  style={{display:"flex" , justifyContent:"space-between" ,flexWrap:"wrap",fontSize:"1.5rem" ,marginBottom:"5px",fontWeight:"bold",paddingTop:"10px",paddingBottom:"10px"}}>
                <h3 style={{paddingLeft:"30px"}}>Sad Songs</h3>
                <div style={{display:"flex",flexDirection:"row",scrollBehavior:"smooth",paddingRight:"55px"}}>
                    <div style={{paddingTop:"7px",paddingRight:"25px"}}>
                        <NavigateBeforeIcon onClick={sadPre} style={{scrollBehavior:"smooth"}} />
                        <NavigateNextIcon onClick={sadNext} style={{scrollBehavior:"smooth"}}/>
                    </div>
                    <div style={{fontSize:"0.8rem",width:"100px",backgroundColor:"rgb(41,41,41)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px",marginRight:15}}>
                        <Link to={"/sadSong"} style={{cursor:"pointer",color:"white"}}>SEE ALL</Link>
                    </div>
                </div>
            </div>

      <div  style={{display:"flex" , justifyContent:"space-between" ,flexDirection:"row", width:"100%",border:"20px solid black"}}>
          {
               sadSong.slice(sadIndex,sadIndex+7).map((item,index)=>{ 
                  return (
                      <Card
                          title={item.title}
                          name={item.artist[0]?.name}
                          imgUrl={item.thumbnail}
                          item={item}
                          index={index}
                      />

                  )
             })
        }
      </div>
      <div  style={{display:"flex" , justifyContent:"space-between" ,flexWrap:"wrap",fontSize:"1.5rem" ,marginBottom:"5px",fontWeight:"bold",paddingTop:"10px",paddingBottom:"10px"}}>
          <h3 style={{paddingLeft:"30px"}}>Happy Songs</h3>
          <div style={{display:"flex",flexDirection:"row",paddingRight:"55px"}}>
                    <div style={{paddingTop:"7px",paddingRight:"25px"}}>
                        <NavigateBeforeIcon onClick={happyPre} />
                        <NavigateNextIcon onClick={happyNext}/>
                    </div>
            <div style={{fontSize:"0.8rem",width:"100px",backgroundColor:"rgb(41,41,41)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px",marginRight:15}}>
                <Link to={"/happySong"} style={{cursor:"pointer",color:"white"}}>SEE ALL</Link>
            </div>
         </div>
      </div>
      <div  style={{display:"flex" , justifyContent:"space-between" ,flexDirection:"row", width:"100%",border:"20px solid black"}}>
          {
               happySong.slice(happyIndex,happyIndex+7).map((item)=>{ 
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
      <div  style={{display:"flex" , justifyContent:"space-between" ,flexWrap:"wrap",fontSize:"1.5rem" ,marginBottom:"5px",fontWeight:"bold",paddingTop:"10px",paddingBottom:"10px"}}>
          <h3 style={{paddingLeft:"30px"}}>Romantic Songs</h3>
          <div style={{display:"flex",flexDirection:"row",paddingRight:"55px"}}>
                    <div style={{paddingTop:"7px",paddingRight:"25px"}}>
                        <NavigateBeforeIcon onClick={romanticPre} />
                        <NavigateNextIcon onClick={romanticNext}/>
                    </div>
            <div style={{fontSize:"0.8rem",width:"100px",backgroundColor:"rgb(41,41,41)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px",marginRight:15}}>
                <Link to={"/romanticSong"} style={{cursor:"pointer",color:"white"}}>SEE ALL</Link>
            </div>
         </div>
      </div>
      <div  style={{display:"flex" , justifyContent:"space-between" ,flexDirection:"row", width:"100%",border:"20px solid black"}}>
          {
               romanticSong.slice(romanticIndex,romanticIndex+7).map((item)=>{ 
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
      <div  style={{display:"flex" , justifyContent:"space-between" ,flexWrap:"wrap",fontSize:"1.5rem" ,marginBottom:"5px",fontWeight:"bold",paddingTop:"10px",paddingBottom:"10px"}}>
          <h3 style={{paddingLeft:"30px"}}>Excited Songs</h3>
          <div style={{display:"flex",flexDirection:"row",paddingRight:"55px"}}>
                    <div style={{paddingTop:"7px",paddingRight:"25px"}}>
                        <NavigateBeforeIcon onClick={excitedPre} />
                        <NavigateNextIcon onClick={excitedNext}/>
                    </div>
            <div style={{fontSize:"0.8rem",width:"100px",backgroundColor:"rgb(41,41,41)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px",marginRight:15}}>
                <Link to={"/excitedSong"} style={{cursor:"pointer",color:"white"}}>SEE ALL</Link>
            </div>
         </div>
      </div>
      <div  style={{display:"flex" , justifyContent:"space-between" ,flexDirection:"row", width:"100%",border:"20px solid black"}}>
          {
               excitedSong.slice(excitedIndex,excitedIndex+7).map((item)=>{ 
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
  <div style={{color:"white", marginTop:"8px",margin:"10px",width:"100%"}}>
            <div  style={{display:"flex" , justifyContent:"space-between" ,flexWrap:"wrap",fontSize:"1.5rem" ,marginBottom:"5px",fontWeight:"bold",paddingTop:"10px",paddingBottom:"10px"}}>
                <h3 style={{paddingLeft:"30px"}}>Popular Album</h3>
                <div style={{display:"flex",flexDirection:"row",paddingRight:"55px"}}>
                    <div style={{paddingTop:"7px",paddingRight:"25px"}}>
                        <NavigateBeforeIcon onClick={albumPre} />
                        <NavigateNextIcon onClick={albumNext}/>
                    </div>
                    <div style={{fontSize:"0.8rem",width:"100px",backgroundColor:"rgb(41,41,41)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px",marginRight:15}}>
                        <Link to={"/albumData"} style={{cursor:"pointer",color:"white"}}>SEE ALL</Link>
                    </div>
                </div>
            </div>

            <div  style={{display:"flex" , justifyContent:"space-between" ,flexDirection:"row", width:"100%",border:"20px solid black"}}>
                {
                    albumData.slice(albumIndex,albumIndex+7).map((item)=>{
                    
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
    </div>
    )
  }



export default Home