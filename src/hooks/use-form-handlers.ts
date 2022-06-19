import {useDispatch} from "react-redux";

import {formActions} from "../store/form";

const useChangeHandler = () => {
  const dispatch = useDispatch();

  const changeGift = (e: any) => {
    dispatch(formActions.changeGift(e.target.value));
  };

  const changeName = (e: any) => {
    dispatch(formActions.changeName(e.target.value));
  };

  const changeImage = (e: any) => {
    dispatch(formActions.changeImage(e.target.value));
  };

  const changeAmount = (e: any) => {
    dispatch(formActions.changeAmount(e.target.value));
  };

  return {changeGift, changeName, changeImage, changeAmount};
};

export default useChangeHandler;
