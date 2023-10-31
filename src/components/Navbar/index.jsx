import "./style.css";

export const Hola = ({ Nombre, Edad }) => {
    return (
      <>
        <div>Ingresa tu nombre {Nombre} </div>
        <div>Edad: {Edad} </div>
      </>
    );
  };
