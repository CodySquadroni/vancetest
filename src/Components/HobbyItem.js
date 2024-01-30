import "./HobbyList.css"

function HobbyItem(props){
    return (
        <div className="hobby-card">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default HobbyItem