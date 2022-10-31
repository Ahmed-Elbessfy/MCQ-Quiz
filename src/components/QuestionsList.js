import { useEffect } from "react";
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

  // components methods

  return (
    <>
      {!state.userNameReducer.showPrompt && state.questionsStore.showQuestions && (
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
          <form>
            {state.questionsStore.questions.map((question) => {
              return <Question key={question.id} question={question} />;
            })}
          </form>
        </div>
      )}
    </>
  );
};

export default QuestionsList;
