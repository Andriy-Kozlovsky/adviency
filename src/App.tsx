import Button from "./components/Button";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  return (
    <div className="h-screen bg-[url('./images/fondo-navidad.jpg')] pt-14">
      <div className="max-w-sm mx-auto bg-white rounded-md p-6 flex flex-col">
        <h1 className="text-red-800 text-2xl">Regalos:</h1>
        <Button primary>Agregar regalo</Button>
        <List />
        <Button primary={false}>Borrar todo</Button>
        <Form />
      </div>
    </div>
  );
}
