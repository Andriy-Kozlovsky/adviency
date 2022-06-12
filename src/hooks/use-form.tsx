import React, {useState} from "react";

import {ListItem, FormHookVars} from "../models";

const useForm = (): FormHookVars => {
  // @ts-ignore
  const [list, setList] = useState<ListItem[]>(JSON.parse(localStorage.getItem("list")));
  const [inputText, setInputText] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<number>(1);
  const [inputImage, setInputImage] = useState<string>("");
  const [openForm, setOpenForm] = useState<boolean>(false);

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const filterRepeated = list.filter((item) => item.text === inputText);

    if (filterRepeated.length > 0 || inputText === "") return;

    await setList((prevList) => [
      ...prevList,
      {text: inputText, amount: inputAmount, image: inputImage},
    ]);

    setInputText("");
    setInputAmount(1);
    setInputImage("");
    openFormHandler();
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);

    if (amount < 1) return;
    setInputAmount(amount);
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputImage(e.target.value);
  };

  const onRemoveItem = (index: number) => {
    setList((prevList) => prevList.filter((item, _index) => index !== _index));
  };

  const onRemoveAllItems = () => {
    setList([]);
  };

  const openFormHandler = () => {
    setOpenForm((prevState) => !prevState);
  };

  return [
    list,
    inputText,
    inputAmount,
    inputImage,
    onFormSubmit,
    onTextChange,
    onAmountChange,
    onImageChange,
    onRemoveItem,
    onRemoveAllItems,
    openForm,
    openFormHandler,
  ];
};

export default useForm;
