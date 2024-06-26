import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Cake Number : {state.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={value === 0} onClick={() => dispatch(buyCake(value))}>
        Buy Cake
      </button>
    </div>
  );
}

export default CakeContainer;
