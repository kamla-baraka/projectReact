import React ,{useState,useEffect} from 'react';
import axios from 'axios'
import {PortfolioSection, PortfolioTitle, Span,PortfolioList,PortfolioItem,ImageWapper,Image,Overlay,OverlaySpan} from './style.js'
const POrtfolio = () => {
  
  const [images, setImages] =useState([])

  useEffect( () =>{
    axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
  }, [])

  const portfolioImages = images.map((imageItem)=>{
    return(
      <ImageWapper key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay>
            <OverlaySpan>
                Show Image
            </OverlaySpan>
        </Overlay>
      </ImageWapper>
    )
  })
    return (
      <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem> 
                <PortfolioItem>HTML</PortfolioItem> 
                <PortfolioItem>Photoshop</PortfolioItem> 
                <PortfolioItem>Wordpress</PortfolioItem> 
                <PortfolioItem>Mobile</PortfolioItem> 
            </PortfolioList>
            
            <div className="box">
                
                {portfolioImages}
                
            </div>
        </PortfolioSection>
    );
}
  

export default POrtfolio;
