import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/slices/userNameSlice";

const UserName = () => {
  // consume data from store
  const state = useSelector((state) => state.userNameReducer);
  // allow dispatching actions
  const dispatch = useDispatch();
  const { setUserName, hideUserNamePrompt } = actions;

  // local component state
  const [userName, setLocalUserName] = useState("");

  // component methods
  const handleNameChange = (e) => setLocalUserName(e.target.value);

  const handleSubmit = (e) => {
    // prevent default behavior of submitting then reload
    e.preventDefault();

    // store user name to store
    dispatch(setUserName(userName));

    // hide uer name prompt
    dispatch(hideUserNamePrompt());
  };

  return (
    <>
      {state.showPrompt && (
        <div className="prompt-container text-secondary">
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border rounded mx-3 text-start"
          >
            <h1 className="text-center mb-4">
              Hi there, we'd like to know your name :)
            </h1>
            {/* user name input  */}
            <div className="my-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Your Name:
              </label>
              <input
                type="text"
                className="form-control mb-4"
                value={userName}
                placeholder="John Doe"
                onChange={handleNameChange}
                required
                minLength={3}
              />
            </div>
            {/* submit button  */}
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Go to quiz
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UserName;
