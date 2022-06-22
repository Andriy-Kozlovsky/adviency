import Button from "./components/Button";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  return (
    <div className="App">
      <h1>Regalos:</h1>
      <Button primary>Agregar regalo</Button>
      <List />
      <Button primary={false}>Borrar todo</Button>
      <Form />
    </div>
  );
}
