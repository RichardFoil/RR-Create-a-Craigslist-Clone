function Posting(props){
    return(
        <div>
            <img src={props.posting.imageURL} alt="post pic" />
            <h2>{props.posting.title} </h2>
            <p>{props.posting.description}</p>
            <p>{props.posting.price}</p>
            
        </div>
    )

}

export default Posting