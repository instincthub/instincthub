import React, { useRef } from "react";
import { useState } from "react";
import Label from "./ModalLabel";
import useTimeout from "./UseTimeout";

const TopModal = () => {
  const [openModal, setOpenModal] = useState(false);
  // useTimeout(() => alert("Hello"), 2000);

  const HandleTimeOut = () => {
    setOpenModal(true);
    setTimeout((e) => {
      setOpenModal(false);
    }, 8000);
  };
  return (
    <div>
      {/* TEST-BTN */}
      <div>
        <button className="important-btn" onClick={HandleTimeOut}>
          Show Success State
        </button>
      </div>
      <Label open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default TopModal;
