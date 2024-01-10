
import ButtonImage from './Images/back_button.png'

function Changepass(){

    const navbarStyle = {
        height:'60px',
        display:'flex',
        alignItems: 'center',
        
    };

    return(
        <div>
            <div className="bg-custom-purple" style={navbarStyle}>
                <button className="px-4 ">
                <img src={ButtonImage} alt="Button Icon " className="h-4 w-4 mr-2" />
                </button>
                <h1 className="text-white px-10 ">Change Password</h1>
            </div>
        </div>
    );

}
export default Changepass;