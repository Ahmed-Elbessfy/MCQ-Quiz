import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/slices/questionsSlice";

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

  return (
    <>
      {!state.userNameReducer.showPrompt && (
        <div>
          {state.questionsStore.questions.map((q) => {
            return (
              <div key={q.id}>
                <p className="lead">{q.question}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default QuestionsList;
