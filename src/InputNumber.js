/** 
 *  请实现支持如下代码的InputNumber组件，可以受控和非受控。
      function App(){
        const [value,setValue] = useState('aaa')
        return (
            <div>
            <InputNumber value={value} onChange={e=>{}}/>
            <InputNumber defaultValue={value} onChange={e=>{}}/>
            </div>
        )
      } 
 * 
*/
import React,{Component} from 'react';
import './App.css';



class InputNumber extends Component{
  constructor(props) {
    super(props);
    this.state = {
        value: props.value
    }
}

componentWillReceiveProps(nextProps) {
    this.setState({
        value: nextProps.value
    })
}
  
  handleChange(e) {
    this.onChange(e.target.value)
}
  plus() {
    const value = ++this.input.value
    this.onChange(value)
}
onChange(value) {
  value = value.toString().replace(/\D/g, '');
  value = value > 100 ? 100 : value;
  this.setState({
      value,
  })
}

  render() {
		return (
			<div>
        <input value={this.state.value} onChange={e => this.handleChange(e)}  ref={ref => this.input = ref} />
                <button onClick={() => this.plus()}>+</button>
                <br/>
               输入值： 1-100
			</div>
		);
	}
}


export default InputNumber;


