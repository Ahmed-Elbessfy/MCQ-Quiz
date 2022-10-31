import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { actions as scoreActions } from "../store/slices/scoreSlice";

function Question({ question }) {
  // allow dispatching actions
  const dispatch = useDispatch();
  const { setScore } = scoreActions;

  // component methods
  // handle input change to store selected value, check if answer is right or wrong then dispatch set score action with result to update score at the state
  const handleChange = (e) => {
    let result = e.target.value === question.answer ? 1 : -1;
    dispatch(setScore(result));
  };

  return (
    <>
      {/* question text  */}
      <p className="h3 mt-4">{question.text}</p>
      {/* question options  */}
      <div className="row">
        {question.options.map((option, i) => {
          return (
            <div
              className="form-check col-md-6 col-lg-3 mx-0 my-2  my-lg-0 p-0"
              key={i}
            >
              {/* input that hold user selection  value  */}
              <input
                type="radio"
                className="btn-check"
                name={"question" + question.id}
                value={option}
                id={option}
                onChange={handleChange}
              />
              {/* text inside the option  */}
              <label
                className="btn btn-outline-secondary w-75"
                htmlFor={option}
              >
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}

// validate question data type
Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
