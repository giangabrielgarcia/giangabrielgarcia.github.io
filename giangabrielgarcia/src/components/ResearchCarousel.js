import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
    {
     image: require('../assets/images/concussion-management.jpg'), 
    },
    {
      image:require('../assets/images/maternal-health.jpg'), 
     },
     {
      image:require('../assets/images/opioid-crisis.jpg'), 
     } 
  ]

const ResearchCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel-container mx-auto'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block slide-size"
          src={slide.image}
          alt="slider"
        />
      </Carousel.Item>
        )
      })}
    </Carousel>
    </div>
  );
}
export default ResearchCarousel;