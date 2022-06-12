import React from "react";

export interface ListItem {
  text: string;
  amount: number;
  image: string;
}

export type FormHookVars = [
  ListItem[],
  string,
  number,
  string,
  (e: React.SyntheticEvent) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: number) => void,
  (e: React.MouseEvent<HTMLButtonElement>) => void,
  boolean,
  () => void,
];

export interface FormProps {
  onFormSubmit: (e: React.SyntheticEvent) => void;
  inputText: string;
  inputImage: string;
  inputAmount: number;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openForm: boolean;
  openFormHandler: () => void;
}

export interface ListProps {
  list: ListItem[];
  onRemoveItem: (e: number) => void;
  onRemoveAllItems: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
