export interface ListItem {
  id: number;
  text: string;
  name: string;
  image: string;
  amount: number;
}

export const initialState = {
  id: 0,
  text: "",
  name: "",
  image: "",
  amount: 1,
};
