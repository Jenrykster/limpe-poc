import { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <header>
        <div className="rect" />
        <nav>
          <p className="active-nav">Inicio</p>
          <p>Canais</p>
          <p>Aulas</p>
          <p>Contato</p>
          <p>Locais</p>
          <p>Quem somos</p>
        </nav>
        <button>Entrar</button>
      </header>
      <main>
        <div className="banner">
          <h1>Smartsteps</h1>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
