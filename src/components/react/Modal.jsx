const Modal = ({ children }) => {
  return (
    <section className="absolute flex flex-col justify-center items-center gap-10 top-0 left-0 h-full w-full bg-black bg-opacity-50">
      {children}
    </section>
  );
};

export default Modal;
