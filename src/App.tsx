import "./App.css";
import Header from "./components/header/Header";
import ListaSkill from "./components/listaHabilidade/lista";
import Bio from "./page/Bio";

function App() {
  return (
    <>
      <div className="container">
      <Header />
        <Bio />
        <ListaSkill />
      </div>
    </>
  );
}

export default App;
