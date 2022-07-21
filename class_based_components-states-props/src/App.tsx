import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'

type props = {
}

type State = {
  count: number
}

export default class app extends Component<props, State>{
  state = {
    count : 1,
    mams: 'askas'
  }

  add = () =>{
    this.setState((prevState) =>({
      count: prevState.count +1 
    }))
  }
  sub = () =>{
    this.setState((prevState) =>({
      count: prevState.count - 1 
    }))
  }
    render(){
      return(
        <div className="App, App-header">
          {this.state.count}
          <div>
            <button className="btn" onClick={() => this.add()}>Add</button>
            <button className="btn" onClick={() => this.sub()}>Sub</button>
          </div>
        </div>
      )
    }
}

// function App() {
//   return (
//     <div className="App">
//       <Hello name='REACT!!!'></Hello>
//     </div>
//   );
// }

// export default App;
