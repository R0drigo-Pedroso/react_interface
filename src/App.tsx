import "./App.css";
import Header from "./components/header/Header";
import ListaSkill from "./components/listaHabilidade/Lista";
import ListUsers from "./components/usuario/ListUser";
import Bio from "./page/Bio";

function App() {
  return (
    <div className="container">
      <Header />
      <Bio />
      <ListaSkill />
      <ListUsers
        user={{
          name: "rodrigo",
          idade: 17,
        }}
      />
    </div>
  );
}

export default App;
