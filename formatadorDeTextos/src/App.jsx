import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [textoExibido, setTextoExibido] = useState("");

  function handleClick() {
    const textoFormatado = texto.replace(/[^a-zA-Z0-9]/g, '')
    setTexto(textoFormatado);
    navigator.clipboard.writeText(textoFormatado);
    setTextoExibido(textoFormatado);
    alert(`"${textoFormatado}" Copiado!`);
  }

  return (
    <div>
      <h1>Formatador/Limpador de textos em React</h1>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
      <button onClick={handleClick}>Copiar</button>
      <p>Texto Copiado: "{textoExibido}"</p>
      <div>
      </div>
    </div>
  );
}

export default App;
