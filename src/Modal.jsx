import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  console.log(isModalOpen);

  return <div>Modal</div>;
};

export default Modal;
