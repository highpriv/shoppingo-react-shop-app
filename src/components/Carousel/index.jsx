import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Carousel.css";

export const CarouselItem = ({children, width}) => {
  return (
    <div className="carousel-item" style={{ width: width}}>
      {children}
    </div>
  );
}

const Carousel = ({children}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if(newIndex < 0){
      newIndex = 0;
    }
    else if(newIndex >= React.Children.count(children)){
      newIndex = React.Children.count(children) -1
    }

    setActiveIndex(newIndex);
  }
return(

  <div className="carousel">
    <div className="inner" 
    style={{transform: `translateX(-${activeIndex * 10.3}%)`}}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {width:"20%"})
      })}
    </div>
    <div className="indicators">
      <IconButton onClick={() => {updateIndex(activeIndex - 1)}} size="small">  <ArrowBackIosNewIcon />
</IconButton>
      <IconButton onClick={() => {updateIndex(activeIndex + 1)}} size="small">
  <ArrowForwardIosIcon  />
</IconButton>

    </div>
  </div>
)
}

export default Carousel;
