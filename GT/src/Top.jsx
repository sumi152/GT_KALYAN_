import React, { useState , useEffect, useMemo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cara1 from './Images/top1.jpeg';
import cara2 from './Images/top2.jpeg';
import addfund from './Images/add_fund.png';
import whatsapp from './Images/whatsapp.png';
import call from './Images/call_helpline.png';
import withdraw from './Images/withdraw.png';
import marker from './Images/marker.png';
import black from './Images/blackjed.png';
import topBackground from './Images/bg.png';
import { useNavigate } from 'react-router-dom';
import useCarosuel from './Hooks/useCarosuel';
import {  useSelector } from 'react-redux';
import star from './Images/play_starline.png'
import gali from './Images/gali_disawar.png'



function Top() {
  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover',
    height: 'auto', // Set the height of the div
    width: '100%' // Set the width of the div
  };

  const carouselContainerStyle = {
    padding: '20px',
    paddingBottom: '40px',
    zIndex: '0',
  };

  const imageStyle = {
    maxHeight: '250px',
    maxWidth: '100%',
    height: 'auto',
    width: '80%',
  };

  const cellImageStyle = {
    maxWidth: '150px',
    maxHeight: '150px',
    objectFit: 'cover',
  };

  const centerStyle = {
    width: 'auto',
    padding: '10px',
    borderRadius: '50%', // Make it circular
    // backgroundColor: 'white',
    // background: "linear-gradient(to right, #a832a6, #242224)",


  };

  const markerStyle = {
    marginTop: '5px',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
    gridColumn: '1 / -1',
  };
  const token = useSelector(state=>state.userDetail.token)
  const res = useCarosuel(token);
  const [sd, setsd] = useState([]);
  useEffect(() => {
    if (res && res.sliderdata ) {
      setsd(res.sliderdata);
    }
  }, [res]);
  console.log(sd[0]?.slider_image)
  const navigate = useNavigate();
  const addF=()=>{
    navigate('/imp9');
  }
  
  const phoneNumber = "5555555";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;


  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2" style={topStyle}>
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
          height={'0px'}
          centerMode={false}
        >
          <div>
            <img src={sd[0]?.slider_image} alt="image 1" className="h-full w-full object-cover rounded-xl" style={imageStyle} />
          </div>
          <div>
            <img src={sd[1]?.slider_image} alt="image 2" className="h-full w-full object-cover rounded-xl" style={imageStyle} />
          </div>
        </Carousel>
      </div>
      <div className="relative flex flex-col items-center justify-center">
  <div style={{ position: 'absolute', zIndex: 1 }}>
    <button onClick={() => navigate('/gameRates')} className='flex justify-center'>
      <img className='h-20' src={black} alt="Game Rates" style={cellImageStyle} />
    </button>
  </div>
  <div className="flex space-x-4 mt-0">
    <div>
      <button onClick={() => navigate('/imp9')}>
        <img src={addfund} alt="Add Fund" style={cellImageStyle} />
      </button>
    </div>
    <div>
      <button onClick={() => navigate('/imp7')}>
        <img src={withdraw} alt="Withdraw" style={cellImageStyle} />
      </button>
    </div>
  </div>
  <div className="flex space-x-4 mt-4">
    <div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
        <button>
          <img src={whatsapp} alt="WhatsApp" style={cellImageStyle} />
        </button>
      </a>
    </div>
    <div>
      <button onClick={() => handleButtonClick('addFund')}>
        <img src={call} alt="Call" style={cellImageStyle} />
      </button>
    </div>
  </div>
</div>

      <div style={markerStyle}>
        <img src={marker} alt="marker" />
      </div>
      <div className='flex justify-center items-start pb-5 col-span-full'>
      <button className='mr-3' onClick={() => navigate('/galiIMP')}>
              <img src={gali} alt="Add Fund" className='w-64 h-15' />
            </button>
            <button onClick={() => navigate('/imp2')}>
              <img src={star} alt="Add Fund" className='w-64 h-15' />
            </button>
      </div>
    </div>
  );
}

export default React.memo(Top);