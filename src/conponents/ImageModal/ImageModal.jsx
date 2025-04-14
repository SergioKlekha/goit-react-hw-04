import React from "react";
import Modal from "react-modal"
import s from "./ImageModal.module.css";
import { RxCross2 } from "react-icons/rx";


const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.ImageModal}
      overlayClassName={s.Overlay}
    >
      <button onClick={onClose} className={s.closeBtn}>
        <RxCross2 />
      </button>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;