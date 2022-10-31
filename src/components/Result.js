import { useSelector } from "react-redux";

const Result = () => {
  const state = useSelector((state) => state);
  return <>{state.scoreStore.showScore && <h1>{state.scoreStore.score}</h1>}</>;
};

export default Result;
