import { useGlobalContext } from "./context";

const Home = () => {
  const { openModal } = useGlobalContext();

  return (
    <main>
      <h1>Título</h1>
      <p>Descrição.</p>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};
export default Home;
