import {useDispatch} from "react-redux";

import {formActions} from "../store/form";
import {listActions} from "../store/list";
import {modalActions} from "../store/modal";

const useModal = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(modalActions.open());
  };

  const closeModal = () => {
    dispatch(modalActions.close());
    dispatch(formActions.resetValues());
    dispatch(listActions.clearEdit());
  };

  return {openModal, closeModal};
};

export default useModal;
