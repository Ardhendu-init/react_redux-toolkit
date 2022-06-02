import React from "react";
import { ordered, restocked } from "./cakeSlice";
import { useSelector, useDispatch } from "react-redux";
const CakeView = () => {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes-{cakes > 0 ? cakes : 0}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(3))}>Restock Cakes</button>
    </div>
  );
};

export default CakeView;
