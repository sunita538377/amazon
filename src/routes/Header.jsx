import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faHouse , faPodcast , faHeadphonesSimple, faMagnifyingGlass , faUser} from '@fortawesome/free-solid-svg-icons'
import DropDown from '../components/DropDown';

// import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <>
    <nav>
        <main>
          <div style={{display:"flex" , color:"white" , alignItems:"center"}}>
            <h1><img src={logo} alt='Logo' /></h1>
              <div className='icons'>
                  <Link to={"/home"} style={{padding: "5px"}}>
                  <FontAwesomeIcon icon={faHouse} />  HOME</Link>
              </div>
              <div className='icons'> 
                  <Link to={"/podcasts"}>
                  <FontAwesomeIcon icon={faPodcast} />  PODCASTS</Link>
              </div>    
              <div className='icons'>  
                  <Link to={"/library"}>
                    <FontAwesomeIcon icon={faHeadphonesSimple} /> 
                    <DropDown/>
                  </Link>
              </div>
          </div>
         <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
            <input type='text' placeholder='Search'/>
            {/* <hr style={{color: 'white' , display:'flex' , flexDirection:'row'}}/> */}
            <div style={{border:"1px solid white" ,width:"40px" ,height:"40px"  ,display:"flex" , alignItems:"center" , justifyContent:"center" , borderRadius:"50%" , marginLeft:"15px" }} >
              <FontAwesomeIcon icon={faUser} />
              
            </div>
          </div>
         
         </main>
         
     </nav>  
     <div style={{border:"1px solid white", width:"100vw" }}></div>
     </>
  )
}