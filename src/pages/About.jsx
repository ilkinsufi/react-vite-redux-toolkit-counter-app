import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state/counterSlice";

const About = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div>About</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default About;
