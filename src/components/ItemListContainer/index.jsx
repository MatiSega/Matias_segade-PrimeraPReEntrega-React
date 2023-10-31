import { Hola } from "../Navbar"
import "./styles.css"

export const Rein = () => {
  console.log("Cambio estado componente padre")
  return (
    <>
    <div>Componente Rein</div>
    <Hola mensaje="Va queriendo" mesada={24} />
    </>
  )
}