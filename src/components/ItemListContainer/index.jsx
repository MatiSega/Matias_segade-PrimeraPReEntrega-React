import { Hola } from "../Navbar"
import "./styles.css";


export const Rein = () => {
  console.log("Cambio estado componente padre")
  return (
    <>
    <div>Bienvenidos</div>
    <Hola mensaje="Hola hijo" mesada={100} />
    </>
  )
}