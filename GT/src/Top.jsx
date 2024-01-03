import topBackground from './Images/bg.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cara1 from './Images/top1.jpeg'
import cara2 from './Images/top2.jpeg'

function Top() {
  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover',
    height: '300px', // Set the height of the div
    width: '100%', // Set the width of the div
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const carouselContainerStyle = {
    width: '80%', // Set the width of the carousel container
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={topStyle}>
      <div style={carouselContainerStyle}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          infiniteLoop={true}
          emulateTouch={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          swipeable={true}
          dynamicHeight={true}
          width={'100%'}
          height={'250px'}
          centerMode={true}
        >
          <div>
            <img
              src={cara1}
              alt="image 1"
              className="h-full w-full object-cover rounded-xl"
              style={{ maxHeight: '250px', maxWidth: '100%', height: 'auto', width: 'auto' }}
            />
          </div>
          <div>
            <img
              src={cara2}
              alt="image 2"
              className="h-full w-full object-cover rounded-xl"
              style={{ maxHeight: '250px', maxWidth: '100%', height: 'auto', width: 'auto' }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Top;
