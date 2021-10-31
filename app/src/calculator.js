import React, {Component} from 'react';

class Calculator extends Component{
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
