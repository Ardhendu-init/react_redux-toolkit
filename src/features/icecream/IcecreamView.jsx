import React from "react";
import { ordered, restocked } from "./icecreamSlice";
import { useSelector, useDispatch } from "react-redux";
const IcecreamView = () => {
  const icecreams = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecream-{icecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock icecream</button>
    </div>
  );
};

export default IcecreamView;
