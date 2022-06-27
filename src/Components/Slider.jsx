import {useState} from 'react'
import { Carousel, Button } from 'react-bootstrap';
import './Slider.css'
export default function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
          <Carousel activeIndex={index} onSelect={handleSelect} style={{maxHeight: '80vh'}} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.colorhexa.com/0000ff.png"
            alt="First slide"
          />
         
          <Carousel.Caption id='cap'>
            <div className='cont'>
          
            <h1>Create Dashboard/Report with<span style={{color:'#4fcdd3'}}> LSAlead</span> and increase your target lead</h1 >
            <Button variant="success mt-16" >Gets Started</Button>{' '}
            </div>
               </Carousel.Caption>
        </Carousel.Item>
     
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.colorhexa.com/0000ff.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <div className='cont'>
            <h1>DataSource+Database+APIs = LSAlead
</h1>
<Button variant="success m-6" >Gets Started</Button>{' '}
           
           
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   
  
    );
}
