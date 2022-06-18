import {useEffect, useState} from "react";

import {ListItem, initialState} from "../models";
import {api} from "../api/api";

const useApp = () => {
  // @ts-ignore
  const [list, setList] = useState<ListItem[]>([]);
  const [openedForm, setOpenedForm] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<ListItem>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    api().then((result: any) => {
      setList(result);
      setLoading(false);
    });
  }, []);

  const getObjHandler = (obj: ListItem) => {
    if (obj.text === "") {
      setOpenedForm(false);

      return;
    }
    if (itemToEdit.id !== 0) {
      setList((prevList) => {
        const newList = prevList.map((listItem) => {
          if (listItem.id === itemToEdit.id) {
            listItem = obj;
          }

          return listItem;
        });

        return newList;
      });
    } else {
      setList((prevList) => [...prevList, obj]);
    }
    setOpenedForm(false);
  };

  const removeItem = (id: number) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  const clearList = () => {
    setList([]);
  };

  const openForm = () => {
    setOpenedForm(true);
  };

  const editItem = (id: number) => {
    const [myItem] = list.filter((item) => item.id === id);

    setItemToEdit(myItem);
    openForm();
  };

  const resetItemToEdit = () => {
    setItemToEdit(initialState);
  };

  return {
    openedForm,
    openForm,
    list,
    removeItem,
    clearList,
    getObjHandler,
    editItem,
    resetItemToEdit,
    itemToEdit,
    loading,
  };
};

export default useApp;
