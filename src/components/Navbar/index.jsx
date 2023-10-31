 import "./style.css";

export const Hola = ({ mensaje, mesada }) => {
    return (
      <>
        <div>Mostrar prop: {mensaje} </div>
        <div>Mesada: {mesada} </div>
      </>
    );
  };
