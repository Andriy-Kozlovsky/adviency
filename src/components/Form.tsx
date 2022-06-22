import Button from "./Button";

const Form = () => {
  return (
    <form>
      <div>
        <input name="gift" type="text" />
        <Button primary={false}>soprendeme!</Button>
      </div>
      <input name="price" type="text" />
      <input name="imageUrl" type="text" />
      <input name="amount" type="number" />
      <div>
        <Button primary={false}>Cerrar</Button>
        <Button primary>Guardar</Button>
      </div>
    </form>
  );
};

export default Form;
