import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  address: "",
};

//state - текущее состояние
//action ({type, payload}): type - тип действия, payload - значение, на которое оно меняется (приходит из диспетчера)

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...DEFAULT_FORM_VALUE, name: payload }; //не затрагивает text='', adress=''
    case "SET_TEXT":
      return { ...state, text: payload };
    case "SET_ADDRESS":
      return { ...state, address: payload };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE); //reducer - функция, которая применяется к старому состоянию, чтобы получить новое

  const setName = (name) => {
    dispatch({ type: "SET_NAME", payload: name }); //отправляет данные в action в reduser, payload - то, что передается в name
  };

  const setText = (text) => {
    dispatch({ type: "SET_TEXT", payload: text });
  };

  const setAddress = (address) => {
    dispatch({ type: "SET_ADDRESS", payload: address });
  };

  return {
    form,
    setName,
    setText,
    setAddress,
  };
};
