import React, {Component} from 'react';

class Calculator extends Component{
     constructor(props){
        super(props);
        this.state = {
            num1: "",
            num2: "",
            result: "",
        }
        this.add = this.add.bind(this);
        this.clear = this.clear.bind(this);
    }
    add(){
        this.setState(result,this.state.num1 + this.state.num2);
    }
    clear(){
        this.setState(num1,"");
        this.setState(num2,"");
        this.setState(result,"");
    }
    onChange = (e) =>{
        const {
            onChange,
            inputType,
        } = this.props;

        if(Util.validate(inputType, e.target.value) && onChange) {
            onChange(e);
            this.setError("");
        }
        else {
            this.setError("");
        }
    }
    render(){
        return (
            <div className="App">
              <div className="app-title">
                <h1> Basic Form Calculator</h1>
              </div>
              <form>
                    <input type="text" id="result" readOnly />   
                    <input type="text" id="num" placeholder="enter a number" />
                    <button>Add</button>
                    <button>Clear</button>
              </form>
            </div>
          );
    }
}

export default Calculator;
