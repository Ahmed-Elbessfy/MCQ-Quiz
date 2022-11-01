import { useSelector } from "react-redux";

const Result = () => {
  // consume data from store
  const state = useSelector((state) => state.scoreStore);

  return (
    <>
      {state.showScore &&
        (state.score > 0 ? (
          // Success result > 0
          <div className="text-success">
            <h1 className="score score-success">
              {state.score}
              <br />
            </h1>
            <p className="h2 my-4">Yaaaaah! You did it! Let's celebrate</p>
            {/* <img
            src="https://www.spanishconsalsa.com/wp-content/uploads/friday-celebration-gif-jackie-chan-chris-tucker-car-dancing-rush-hour.gif"
            alt=""
          /> */}
            <img
              src="https://createifwriting.com/wp-content/uploads/2019/04/celebrate-gif.gif"
              alt={"Yaaaaaah! you did it! your score is " + state.score}
            />
          </div>
        ) : (
          // Fail result <= 0
          <div className="text-danger">
            <h1 className="score score-danger">{state.score}</h1>
            <p className="h2 my-3">You should be studying!</p>

            <img
              src="https://gifimage.net/wp-content/uploads/2017/07/angry-cat-gif-18.gif"
              alt={"Your score is " + state.score + "! Go study"}
            />
          </div>
        ))}
    </>
  );
};

export default Result;
