import { useState } from "react";
import Modal from "./Modal";

const ModalAlbumImage = ({ image, handleClose }) => {
  return (
    <Modal>
      <picture>
        <img
          className="w-[600px] h-[600px] rounded-lg object-cover lg:w-[400px] lg:h-[400px]"
          src={image}
          alt="zoom of image"
        />
      </picture>
      <button className="font-bold hover:scale-110" onClick={handleClose}>
        Cerrar
      </button>
    </Modal>
  );
};

const AlbumImage = ({ image, title, id }) => {
  const [open, setOpen] = useState(false);
  const handleZoomImage = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <picture className="aspect-square w-52 h-52 flex-none">
        <img
          src={image}
          alt={`Cover of ${title}`}
          className="object-cover w-full h-full shadow-lg hover:cursor-pointer hover:scale-105"
          onClick={handleZoomImage}
          transition:name={`album ${id} image`}
        />
      </picture>
      {open && <ModalAlbumImage image={image} handleClose={handleClose} />}
    </>
  );
};

export default AlbumImage;
