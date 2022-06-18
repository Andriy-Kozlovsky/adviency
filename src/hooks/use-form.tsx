import {useState} from "react";

const useForm = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState(1);

  const onChange = (targetValue: string, inputType: string) => {
    if (inputType === "text") setText(targetValue);
    if (inputType === "name") setName(targetValue);
    if (inputType === "image") setImage(targetValue);
    if (inputType === "amount") setAmount(Number(targetValue));
  };

  return {
    text,
    name,
    image,
    amount,
    onChange,
  };
};

export default useForm;
