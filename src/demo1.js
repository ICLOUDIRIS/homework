import React,{Component} from 'react';
import './App.css';
import loading from './loading'
import InputNumber from './InputNumber'



class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}


	render() {
		return (
			<div>
				 <InputNumber/>
			</div>
		);
  }
  
  componentDidMount() {
    loading.show()
    setTimeout(()=>{
      this.setState({
        value:['a','b','c'],
      })
      loading.hide()
    },200)
  }
}


export default App;
