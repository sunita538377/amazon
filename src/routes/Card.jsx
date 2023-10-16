import React from 'react'
import TruncatedText from '../components/Trunck'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faEllipsis,
 
} from "@fortawesome/free-solid-svg-icons";

const Card = ({imgUrl,title,name}) => {
  console.log(imgUrl);
  return (
    <div style={{background:"black", width:"180px" , margin:"5px", borderRadius:"10px",padding:"10px"}}>
          <div style={{width:"100%"}}>
              <img style={{width:166 , borderRadius:"10px",height:166}}
              src={imgUrl}
               alt="label"/>
             <button style={{position:"absolute",top:"30%",left:"50%"}}>
                <FontAwesomeIcon icon={faPlay} style={{fontSize:"30px"}} />
           </button>
           <button style={{position:"absolute"}}>
                <FontAwesomeIcon icon={faEllipsis} />
          </button> 
          </div>
          
          <div>
          {/* <div style={{width:"100%",display:"flex",flexWrap:"wrap" , overflow:"hidden",textOverflow: "ellipsis"}}>{title}</div> */}
          {/* <div style={{width:"100%" ,overflow:"hidden",textOverflow: "clip"}}>{name}</div> */}
          <TruncatedText paragraph={title} limit={17}/>
          <TruncatedText paragraph={name} limit={17}/>
          
          </div>

     </div>
  )
}

export default Card