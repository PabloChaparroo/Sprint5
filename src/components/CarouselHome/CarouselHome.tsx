import Carousel from 'react-bootstrap/Carousel';



const CarouselHome = () => {

    return (
        <Carousel>


            <Carousel.Item> 
                <img
                className='d block w-100'
                style={{maxHeight:"400px", objectFit: 'cover',maxWidth:"100%"}}
                src="src/assets/images/1.jpg" alt="1"/>    
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item> 
            <img
                className='d block w-100'
                style={{maxHeight:"400px", objectFit:'cover'}}
                src="src/assets/images/2.jpg" alt="2"/>              
                <Carousel.Caption>
   
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <img
                className='d block w-100'
                style={{maxHeight:"400px", objectFit:'cover'}}
                src="src/assets/images/3.jpg" alt="3"/> 
                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>


    </Carousel>
    )

}

export default CarouselHome