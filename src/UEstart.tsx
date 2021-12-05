import UseEffectStudy from "./UseEffectStudy";
import React,{useState, useEffect, useReducer, useRef} from "react";
import { PostType } from "./models/post.interface";
import { Post } from "./api/api";

interface stateType{
    date:PostType[],
    isError:boolean,
    isLoading:boolean
};

type ACTIONTYPE =
| { type: "OnSuccess",payload: PostType[]}
| { type: "OnFailure",payload: PostType[]};

const initialState : stateType = { 
    date : [],
    isError : false,
    isLoading : true
};

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
    switch (action.type){
        case 'OnSuccess':
            return {
                date : action.payload,
                isError : false,
                isLoading : false                   
            };
        case 'OnFailure':
            return {
                date : [],
                isError : true,
                isLoading : false                   
            };
        default: 
            return state;
    }
};

export default function UEstart(){

    const [isPushButton,setsPushButton] = useState<boolean>(true);
    const [state, dispatch] = useReducer(reducer, initialState) 

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setsPushButton((prevValue) => (!prevValue)); 
    };

    const isFirstRender = useRef(true)

    useEffect(() => {
        if(isFirstRender.current) { // 初回レンダー判定
            isFirstRender.current = false // もう初回レンダーじゃないよ代入
        } else {
            console.log(isPushButton);
            Post.getPosts()
            .then((response) => {
                dispatch({ type: 'OnSuccess', payload: response });
                console.log(state); 
            })
            .catch((err) => {
                dispatch({ type: 'OnFailure', payload: [] }) 
            });  
            return () => {};
        }
    },[isPushButton]);

    return(
        //複数の要素を返す場合はFragment
        <React.Fragment>
        <div>
            <button type="button" onClick={onButtonClick}>StartFetch!</button>
            {state.isLoading ? (<p>Now Loading.....</p>):(<p></p>)}
            {state.isError ? 
                (<p>Error Faield</p>):
                (state.date.map((post) => (
                    <UseEffectStudy  id={post.id} userId={post.userId} title={post.title} body={post.body} />
                )))
            }
        </div>
        </React.Fragment>
    );
}
