import React, { useState } from 'react'
import Star from './Star'

const StarRating = ({maxLength=10}) => {
    const [rating , setRating] = useState(0) ; 
    const [tempRating , setTempRating] = useState(0)
 
  return (
    <div style={{display:"flex" , justifyContent:"center" , gap:"16px" , alignItems:"center"}}>
        <div  style={{display:"flex" , justifyContent:"center"}}>
            {Array.from({length:maxLength} , (_ , i)=>
            <Star key={i} onClick={()=>setRating(i+1)} full={tempRating ?tempRating>=i+1:rating>=i+1} onHoverIn={()=>setTempRating(i+1)} onHoverOut={()=>setTempRating(0)} /> )}
        </div>
        <p>{ tempRating|| rating || ""}</p>
    </div>
  )
}

export default StarRating