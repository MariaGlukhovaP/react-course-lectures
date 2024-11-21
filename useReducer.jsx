// import { useReducer } from "react";

// const ACTIONS = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 };
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// export const UseReducerExample = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   const increase = () => {
//     dispatch({ type: ACTIONS.INCREMENT });
//   };

//   const decrease = () => {
//     dispatch({ type: ACTIONS.DECREMENT });
//   };

//   return (
//     <div>
//       <button onClick={increase}>+</button>
//       <span>{state.count}</span>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// };

// import { useReducer } from "react";
// import { useState } from "react";

// const ACTIONS = {
//   ADD_TODOO: "add-todo",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.ADD_TODOO:
//       return [...todoos, newTodo(action.payload.name)];
//   }
// };

// const newTodo = (name) => {
//   return { id: Date.now(), name: name, complete: false };
// };

// export const UseReducerExample = () => {
//   const [todoos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch({ type: ACTIONS.ADD_TODOO, payload: { name: name } });
//     setName("");
//   };

//   return (
//     <>
//       <form>
//         <input
//           onSubmit={handleSubmit}
//           type="text"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//       </form>
//     </>
//   );
// };
