import React from "react";

interface Myprops  {
    name:string;
    count:number;
}
interface Mystate{
    count:number;
    toggle:boolean;
    text:string;
}

//propsの方は関数宣言時ジェネリクスで縛る関数名<型名>(propsTypeよりらく)
//functionでもいいがアロー関数でconstで宣言するほうがimmutableで行儀が良いわな
const FcStudy:React.FunctionComponent<Myprops> = (props) => {
    /*stateの型も宣言しジェネリクスで、初期化は引数で指定
    もちろんUnionTypeも使えるのでnull許可したければ<Mystate|null>できる*/
    const [state,setstate] = React.useState<Mystate>({
        count:props.count,
        toggle:true,
        text:"（●｀ε´●）"
    });
    

    /* イベントとった(e)から要素を取り出すのは残余(Rest)構文から
    key: 取り出したい値でいい*/
    const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        setstate({...state, text:e.currentTarget.value});
    }
    const onToggleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setstate({...state, toggle:!state.toggle});   
    }
    //this.props と this.state のいずれも、レンダーされたもの、つまりスクリーン上の値を表しています。
    //現在の state に依存する値を更新するためsetState へオブジェクトを渡す代わりに関数を渡してください。
    //https://ja.reactjs.org/docs/faq-state.html#why-is-setstate-giving-me-the-wrong-value
    const onCountClick =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setstate((prevValue) => ({...state, count: prevValue.count + 1}));
    }
    
    return(<div>
        <h1>Hello</h1>
        <p>I am {props.name}</p>
        <input type="text" value={state.text} 
        onChange={onTextChange}/>
        <br />
        <button onClick={onCountClick}>
        Count:{state.count}
        </button>
        <br />
        <button onClick={onToggleClick}>
            toggle:{String(state.toggle)}
        </button>
        <p>{state.text}</p>
    </div>);
}


export default FcStudy;