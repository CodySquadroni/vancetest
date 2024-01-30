import HobbyItem from "./HobbyItem"
import "./HobbyList.css"

function HobbyList(props){
    

    return (
        props.hobbies.map(hobby => <HobbyItem
            name={hobby.name}
            description={hobby.description}/>
            )
    );
}

export default HobbyList