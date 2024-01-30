import "./NewHobbyForm.css";
import { useState } from "react";

function NewHobbyForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [hasMadeError, setHasMadeError] = useState(false);

  function NameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function DescriptionChangeHandler(event) {
    setEnteredDescription(event.target.value);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
    setHasMadeError(false);
  }

  function SubmitHandler(event) {
    event.preventDefault();

    if (enteredName.length === 0 || enteredDescription.length === 0) {
      setHasMadeError(true);
      return;
    }

    const hobbyData = {
      name: enteredName,
      description: enteredDescription,
    };

    props.onSaveHobbyData(hobbyData);

    setEnteredName("");
    setEnteredDescription("");

    setHasMadeError(false);
    setIsEditing(false);
  }

  return (
    <div>
      {!isEditing && <button onClick={startEditingHandler}>Add expense</button>}
      {hasMadeError && (
        <p className="warning-message">All fields must have a value</p>
      )}
      {isEditing && (
        <form onSubmit={SubmitHandler}>
          <div className="container">
            <div>
              <label>Name</label>
              <input
                type="text"
                onChange={NameChangeHandler}
                value={enteredName}
              />
            </div>

            <div>
              <label>Description</label>
              <input
                type="text"
                onChange={DescriptionChangeHandler}
                value={enteredDescription}
              />
            </div>
          </div>

          <div>
            <button type="submit" className="submit-button">
              Add expense
            </button>
            <button type="button" onClick={stopEditingHandler}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default NewHobbyForm;
