import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as questionsActions } from "../store/slices/questionsSlice";
import { actions as scoreActions } from "../store/slices/scoreSlice";

import Question from "./Question";

const QuestionsList = () => {
  // consume data from store
  const state = useSelector((state) => state);

  // allow dispatching actions
  const dispatch = useDispatch();
  // questions actions
  const { randomizeQuestionsOrder, hideQuestions } = questionsActions;
  // score actions
  const { setScoreShow } = scoreActions;

  // reorder questions each time the component rerendered
  useEffect(() => {
    dispatch(randomizeQuestionsOrder());
  }, [randomizeQuestionsOrder, dispatch]);

  // components methods
  const handleSubmit = (e) => {
    // prevent default behavior of submitting then reload
    e.preventDefault();

    // hide questions
    dispatch(hideQuestions());

    // show result
    dispatch(setScoreShow());
  };
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
          <form onSubmit={handleSubmit}>
            {state.questionsStore.questions.map((question) => {
              return <Question key={question.id} question={question} />;
            })}
            <button
              type="submit"
              className="btn btn-lg my-5 btn-primary text-uppercase"
            >
              get my result
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default QuestionsList;
