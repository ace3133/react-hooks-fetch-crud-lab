import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  // Function to add a new question to the list
  const addQuestionToList = (newQuestion) => {
    // Implement your logic to add the new question to the list
    // This could involve fetching the updated list of questions again or directly updating state
    console.log("Adding new question:", newQuestion);
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={addQuestionToList} /> : <QuestionList />}
    </main>
  );
}

export default App;

