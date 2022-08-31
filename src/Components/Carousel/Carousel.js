import React from "react";
import './Carousel.css'

export const Carousel=()=>{
return(
  <div className="carousel">
    <div id="carouselExampleDark" className="carousel carousel-dark slide" touch="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src="https://s3-alpha-sig.figma.com/img/dac9/521f/8bf3501a3789383cf48a9560156c1d2b?Expires=1662940800&Signature=BSkVcd-V8InpLJLJHE-X451Kd4tmu4z~yPGDkymmx83KyhuILsEKLsHqALFgqNCybMb0r6Eb8Dbukzef0ldJRO2apzCUPEVBOX6AtXjsThMMeOSCY5bA1fGHbELNGnDCUkxmQbMnZkgL1cvTqXRdWAMHxWGp2HWCC5ChTAC8Bd7WB0d54pdRHMHOFmtoUpj2EdUTxk0Jgq9UDjPhmZ5~haxKoEPrfC2j5mDlMevSMpjstg6K2AUZiQueqd2rR8iYmeIAGRNDTya9gDLF4ZY6vzxouOGeVXw-gg5DcsxZ1PjdmEvygu4Kk17P54INO1s2SyOTIHfB1-j5sESVbuQbyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className="d-block " alt="Sneakers for men"/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div className="carousel-item" >
      <img src="..." className="d-block" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>

</div>
</div>
)
}