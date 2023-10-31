import "./app.css";
import { HookUseState } from "./components/HookUseState/HookUseState";
import { Rein } from "./components/ItemListContainer";

export const App = () => {
  return (
    <>
      <h1>Rein Informatica</h1>
      <Rein/>
      <HookUseState />
    </>
  );
};