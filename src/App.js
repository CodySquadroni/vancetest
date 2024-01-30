import HobbyList from "./Components/HobbyList"
import NewHobbyForm from "./Components/NewHobbyForm";
import { useState } from "react"

const DUMMY_HOBBIES = [
  {
      name:"Chess",
      description:"Popular board game with 64 squares."
  },
  {
      name:"Rock Climbing",
      description:"Climbing steep cliffs is cool."
  },
  {
      name:"Pickleball",
      description:"Hit a ball across a net."
  }
]

function App() {
  const [hobbies, setHobbies] = useState(DUMMY_HOBBIES)

  function SaveHobbyHandler(hobby){
    setHobbies(prevHobbies => {
      return [hobby, ...prevHobbies]
    })
  }

  return (
    <div>
      <NewHobbyForm onSaveHobbyData={SaveHobbyHandler}/>
      <HobbyList hobbies={hobbies}/>
    </div>
  );
}

export default App;
