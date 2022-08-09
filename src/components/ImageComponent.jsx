import React, { useState } from 'react'
import '../App.css';
export default function ImageComponent({img1_link,img2_link,img3_link}) {

  // console.log(props.images1[0].img1);

  const [img, setImg] = useState(<img src={img1_link} alt="no-img"/>);

  const handleImage1 = ()=>{
    setImg(<img src={img1_link} alt="no-img"/>)
  }
  const handleImage2 = ()=>{
    setImg(<img src={img2_link} alt="no-img"/>)
  }
  const handleImage3 = ()=>{
    setImg(<img src={img3_link} alt="no-img"/>)
  }

  return (
    <div className="LargeImgDiv">
      {img}

      <div className=" mx-0 row my-2 d-flex justify-content-center">
        <div onClick={handleImage1} className="SmallImgDiv mx-1 p-0 col-2">
          <img src={img1_link} alt="card-img"/>
        </div>
        <div onClick={handleImage2} className="SmallImgDiv mx-1 p-0 col-2">
          <img src={img2_link} alt="card-img"/>
        </div>
        <div onClick={handleImage3} className="SmallImgDiv mx-1 p-0 col-2">
          <img src={img3_link} alt="card-img"/>
        </div>
      </div>

    </div>
  )
}
