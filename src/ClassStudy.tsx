import React from 'react';

//まずはオーソドックスにクラスを書いてstateとライフサイクルを確認する
//https://ja.reactjs.org/docs/state-and-lifecycle.html
interface Myprops  {
    name:String;
}
interface Mystate{
    count:number;
    toggle:boolean;
    text:string;
}

/*クラスを宣言する時ジェネリクスで<props,state>の型を指定できます
typeでもinterfaceでもOK */
class ClassStudy extends React.Component<Myprops,Mystate>{
    /*stateクラスのプロパティをアノテートすることは厳密には必要ではありませんが、
    this.stateにアクセスする際や、ステートを初期化する際に、
    より適切な型推論が可能になります。
    https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components
    */
    state:Mystate = {
        count:0,
        toggle:true,
        text:""
    };
    //イベント設定時引数の型は教えてくれる
    onCountClick =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        this.setState(
            { count : this.state.count + 1});
    };

    onToggleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        this.setState({ toggle : !this.state.toggle});
        console.log(this.state.toggle);
    };
    
    onTextChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ text : e.currentTarget.value });
    };

    render(){
        return(
            <div>
                <h1>Hello</h1>
                <p>I am {this.props.name}</p>
                <input type="text" value={this.state.text} onChange={this.onTextChange} />
                <br />
                <button onClick={this.onCountClick}>
                    Count:{this.state.count}
                </button>
                <br />
                <button onClick={this.onToggleClick}>
                    toggle:{String(this.state.toggle)}
                </button>
                <p>{this.state.text}</p>
            </div>
        );
    };
}

export default ClassStudy;
