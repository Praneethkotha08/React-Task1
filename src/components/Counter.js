import {Component} from "react";
import "./style.css"
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }

    handleChange=(event)=>{
        let word=event.target.value;
        if(word==null){
            return ;
        }
        let arr=word.trim().split(" ");
        this.setState({
            count:arr.length
        });
    }
    render(){
        return(
<div class="container">
    <h1>Responsive Paragraph Word Counter</h1>
    <textarea placeholder="Enter your text" onChange={this.handleChange}></textarea>
    <p>Word Count:{this.state.count}</p>
</div>
        );
    }
}
export default Counter;