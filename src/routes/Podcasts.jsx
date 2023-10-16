import React from 'react'


function Podcasts() {
  return (
    <div style={{color:"white"}}>
      <div>
         <h3 style={{padding:"15px",paddingLeft:"70px"}}>Find Podcasts in</h3> 
         <div style={{padding:"15px 20px 0 20px ",display:"flex", justifyContent:"space-between",flexWrap:"wrap"}}>
          {/* <Link to="/comingSoon"> */}
            <button className="btn ">Sports</button>
            <button className="btn ">News</button>
            <button className="btn ">Comedy</button>
            <button className="btn">True Crime</button>
            <button className="btn">Health & fitness</button>
            <button className="btn">Technology</button>
            <button className="btn">Government</button>
            <button className="btn">Education</button>
            <button className="btn">Kids & Family</button>
            <button className="btn">Science</button>
            <button className="btn">History</button>
            <button className="btn">Society & Culture</button>
            <button className="btn">Religion & Spirituality</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Podcasts