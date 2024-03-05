import "./Modal.css";
import { useEffect } from "react";

const MyModal = ({ closeModal, totalIndex, totalPoints }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper rounded" onClick={closeModal}></div>
      <div className="modal-container text-black flex flex-col rounded-tr-xl rounded-br-xl rounded-bl-none rounded-tl-xl font-bold py-4 px-2">
        <p>Once you placed a bid, it will not be cancelled</p>
        <p className="text-center"> in any situation</p>
        <p className="text-center bg-green-400 mb-2 py-2 text-white ">Single DIgit</p>
        <div className="flex justify-between align-middle bg-green-900 text-white mb-2 py-2 px-2">
          <div className=" flex flex-col ">
            <p>Total Bid</p>
            <p className="text-center">{totalIndex}</p>
          </div>
          <div className="flex flex-col ">
            <p>Total Point</p>
            <p className="text-center">{totalPoints}</p>
          </div>
          <div className="flex flex-col ">
            <p>Game Type</p>
            <p className="text-center">Close</p>
          </div>
        </div>
        <div className="flex justify-around mt-2">
          <button onClick={closeModal} className="model-btn p-4 bg-green-500 rounded-xl ">
            CANCEL
          </button>
          <button className="bg-green-500 rounded-xl p-4">SUBMIT</button>
        </div>
      </div>
    </>
  );
};
export default MyModal;
