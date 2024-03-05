import "./Modal.css"
import {useEffect} from "react";

const MyModal = ({closeModal})=>{


useEffect(()=>{
    document.body.style.overflowY = "hidden";
    return ()=>{document.body.style.overflowY = "scroll"};
},[]);

    return (
        <>  
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container text-black">
            <h1>Onc you placed a bid, it will not be cancelled in any situation</h1>
            <h1>Single DIgit</h1>
            <button onClick={closeModal} className="model-btn">Submit</button>
            </div>
        </>
    )
}
export default MyModal;