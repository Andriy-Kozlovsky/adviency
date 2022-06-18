import {useState} from "react";

import {ListItem} from "../models";

const useFormInputs = (itemToEdit: ListItem) => {
  const [text, setText] = useState(itemToEdit.text);
  const [name, setName] = useState(itemToEdit.name);
  const [image, setImage] = useState(itemToEdit.image);
  const [amount, setAmount] = useState(itemToEdit.amount);

  const onChange = (targetValue: string, inputType: string) => {
    if (inputType === "text") setText(targetValue);
    if (inputType === "name") setName(targetValue);
    if (inputType === "image") setImage(targetValue);
    if (inputType === "amount") setAmount(Number(targetValue));
  };

  const resetValues = () => {
    setText("");
    setName("");
    setImage("");
    setAmount(1);
  };

  return {
    text,
    name,
    image,
    amount,
    onChange,
    resetValues,
  };
};

export default useFormInputs;
