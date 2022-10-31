import { createSlice } from "@reduxjs/toolkit";

// initiate state
const initialState = {
  questions: [
    {
      id: 0,
      text: "Whats is the Capital of Zimbabwy?",
      options: ["Harare", "Akra", "Norton", "Karoi"],
      answer: "Harare",
    },
    {
      id: 1,
      text: "Your feet have ...... % bones of all of your bones.",
      options: ["25", "10", "33", "20"],
      answer: "25",
    },
    {
      id: 2,
      text: "Which of these are fruits?",
      options: ["Cucumber", "Onion", "Tomato", "Beans"],
      answer: "Tomato",
    },
    {
      id: 3,
      text: "Who invented the lightbulb?",
      options: ["Edison", "Einstein", "Tesle", "Hawking"],
      answer: "Edison",
    },
    {
      id: 4,
      text: "How high is Everest?",
      options: ["8849", "7835", "9476", "3827"],
      answer: "8849",
    },
  ],
};

// create slice to create store
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    randomizeQuestionsOrder: (state) => {
      // order questions randomly
      let reorderedQuestions = state.questions.sort(() => Math.random() - 0.5);

      // order options randomly for each question
      reorderedQuestions = reorderedQuestions.map((q) => {
        q.options.sort(() => Math.random() - 0.5);
        return q;
      });

      // set state questions to be the new ordered list
      state.questions = reorderedQuestions;
    },
  },
});

// to create state in the main store
export default questionsSlice.reducer;

// to allow dispatching actions in the components
export const actions = questionsSlice.actions;
