import React,{Component} from 'react';
import './App.css';
import confirm from './confirm'
import InputNumber from './InputNumber'



class App extends Component{
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
    confirm.show()
    setTimeout(()=>{
      this.setState({
        value:'hello world',
      })
      confirm.hide()
    },2000)
  }
}


export default App;
