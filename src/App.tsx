import Form from "./components/Form/Form";
import List from "./components/List/List";
import useApp from "./hooks/use-app";
import "./styles.css";

export default function App() {
  const {
    openedForm,
    list,
    removeItem,
    clearList,
    getObjHandler,
    openForm,
    resetItemToEdit,
    itemToEdit,
    editItem,
  } = useApp();

  return (
    <div className="app">
      <h1>Regalos:</h1>
      <button className="btn-primary" onClick={() => openForm()}>
        Agregar regalo
      </button>
      <List editItem={editItem} list={list} removeItem={removeItem} />
      <button onClick={() => clearList()}>Borrar todo</button>
      {openedForm && (
        <Form itemToEdit={itemToEdit} resetItemToEdit={resetItemToEdit} sendObj={getObjHandler} />
      )}
    </div>
  );
}
