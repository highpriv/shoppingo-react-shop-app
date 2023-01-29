import React, {useState} from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
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
    style={{transform: `translateX(-${activeIndex * 17}%)`}}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {width:"17%"})
      })}
    </div>
    <div className="indicators">
      <button onClick={() => {updateIndex(activeIndex - 1)}}>Prev</button>
      <button onClick={() => {updateIndex(activeIndex + 1)}}>
  <NavigateNextIcon size="large" />
</button>

    </div>
  </div>
)
}

export default Carousel;
