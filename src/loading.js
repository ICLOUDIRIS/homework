import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import './App.css';


class DButton extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
      title: '',
      btnArray:[{'name':'cancle',id:0},{'name':'ok',id:1},]
		}
	}

	render() {
		return (
			<div className = 'button'>{this.state.title}
       {this.state.btnArray.map(item => <button key={item.id} onClick={(e) => {
         console.log(e);
				}}>{item.name}</button>)}
			</div>
		);
  }
}

class Loading extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		}
	}

	render() {
		return (
			<div className = 'loading'>
        <div className="loading_mask"> </div>
        <div className="loading_content"></div>
       <DButton/>
			</div>
		);
  }
}

let node = null 
const loading = {
  show:function(){
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<Loading/>,node)
  },
  hide:function(){
      if(node){
        ReactDOM.unmountComponentAtNode(node)
        document.body.removeChild(node)
      }
  },
}

export default loading
