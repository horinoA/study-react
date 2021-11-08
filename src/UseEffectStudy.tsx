import React, { useState } from "react";
import {UEStudy} from "./models/UEStudy.interface"



const UseEffectStudy:React.FunctionComponent<UEStudy> = (props) => {

    const [state,setState] = useState<UEStudy>({
        id:props.id,
        name:props.name,
        director:props.director,
        rating:props.rating
    });

    return(
        <div>
        <h1>MovieList</h1>
        <input type="text" value={state.id} />
        <br />
        <button >
            getMovie!
        </button>
        <p>Title:{state.name}</p>
        <p>Directer:{state.director}</p>
        <p>Rating:{state.rating}</p>
        </div>
    );
}

export default UseEffectStudy;

