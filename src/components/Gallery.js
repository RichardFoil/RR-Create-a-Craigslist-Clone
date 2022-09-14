import React from "react";
import Posting from "./Posting";
function Gallery(props){
    return (
        <div className="Gallery">
            <h2>Gallery</h2>
            {props.postings.map((p,i) => {
                return <Posting posting={p} key={i} />
            })}

        </div>
    )
  }

export default Gallery  
