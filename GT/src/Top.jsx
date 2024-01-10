import topBackground from './Images/bg.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cara1 from './Images/top1.jpeg';
import cara2 from './Images/top2.jpeg';
import addfund from './Images/add_fund.png';
import whatsapp from './Images/whatsapp.png';
import withdraw from './Images/withdraw.png';
import call from './Images/call_helpline.png';
import marker from './Images/marker.png';

function Top() {
  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover',
    height: 'auto', // Set the height of the div
    width: '100%', // Set the width of the div
    display: 'grid',
    justifyContent: 'center',
  };

  const carouselContainerStyle = {
    padding: '20px',
    paddingBottom: '40px',
  };

  const imageStyle = {
    maxHeight: '250px', 
    maxWidth: '100%',
    height: 'auto',
    width: '80%',
  };

  const tableStyle = {
    paddingTop: '50px',
    borderCollapse: 'collapse',
    width: '100%',
    maxWidth: '600px',  // Center the table on the page
  };

  const cellStyle = {
    padding: '20px',
    textAlign: 'center',
    border: 'none',
    verticalAlign: 'middle', // Ensure vertical alignment is consistent
  };

  const cellImageStyle = {
    maxWidth: '200px',
    maxHeight: '200px',
    objectFit: 'cover',
  };

  const buttonStyle = {
    padding: '0px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex', // Ensure content is centered vertically and horizontally
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  };

  const markerStyle = {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
    gridColumn: '1 / -1',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" style={topStyle}>
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
            <img
              src={cara1}
              alt="image 1"
              className="h-full w-full object-cover rounded-xl"
              style={imageStyle}
            />
          </div>
          <div>
            <img
              src={cara2}
              alt="image 2"
              className="h-full w-full object-cover rounded-xl"
              style={imageStyle}
            />
          </div>
        </Carousel>
      </div>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={cellStyle}>
              <button style={buttonStyle} onClick={() => handleButtonClick('addFund')}>
                <img
                  src={addfund}
                  alt="Add Fund"
                  style={cellImageStyle}
                />
              </button>
            </td>
            <td style={cellStyle}>
              <button style={buttonStyle} onClick={() => handleButtonClick('withdraw')}>
                <img
                  src={withdraw}
                  alt="Withdraw"
                  style={cellImageStyle}
                />
              </button>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <button style={buttonStyle} onClick={() => handleButtonClick('whatsapp')}>
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  style={cellImageStyle}
                />
              </button>
            </td>
            <td style={cellStyle}>
              <button style={buttonStyle} onClick={() => handleButtonClick('call')}>
                <img
                  src={call}
                  alt="Call"
                  style={cellImageStyle}
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={markerStyle}>
        <img src={marker} alt="marker" />
      </div>
    </div>
  );
}

export default Top;
