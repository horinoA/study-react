import React, { useState } from "react";
import {PostType} from "./models/post.interface"

const UseEffectStudy:React.FunctionComponent<PostType> = (props) => {

    const [state,setState] = useState<PostType>({
        userId:props.userId,
        id:props.id,
        title:props.title,
        body:props.body
    });

    return(
        <div>
            <p>userId:{state.userId}</p>
            <p>Title:{state.title}</p>
            <p>id:{state.id}</p>
            <p>body:{state.body}</p>
            <br />
        </div>
    );
}

export default UseEffectStudy;

