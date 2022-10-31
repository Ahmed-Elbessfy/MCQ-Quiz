import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/slices/questionsSlice";

import Question from "./Question";

const QuestionsList = () => {
  // consume data from store
  const state = useSelector((state) => state);

  // allow dispatching actions
  const dispatch = useDispatch();
  const { randomizeQuestionsOrder } = actions;

  // reorder questions each time the component rerendered
  useEffect(() => {
    dispatch(randomizeQuestionsOrder());
  }, [randomizeQuestionsOrder, dispatch]);

  // local component state
  // calculate score locally  then pass it to the store
  const [score, setScore] = useState(0);

  // components methods
  // calculate score
  const calculateScore = (result) => {
    // edit score depending on previous value
    setScore((prev) => (prev += result));
  };
  return (
    <>
      {!state.userNameReducer.showPrompt && (
        <div>
          <h1 className="mb-5">
            Welcome{" "}
            <strong className="text-primary">
              {state.userNameReducer.userName}
            </strong>
            !
            <br /> let us see how awesome is you!
          </h1>
          {/* Questions  */}
          {state.questionsStore.questions.map((question) => {
            return (
              <form>
                <Question
                  key={question.id}
                  question={question}
                  getAnswer={calculateScore}
                />
              </form>
            );
          })}
        </div>
      )}
    </>
  );
};

export default QuestionsList;
