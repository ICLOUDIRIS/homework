import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';


class DButton extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
      title: '',
      btnArray:[{'name':'cancel',id:0},{'name':'ok',id:1},]
		}
  }
   componentClick(e){
    let res = e.target.innerText
    return new Promise((resolve, reject) => {
      setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      if(res === 'ok' ) {resolve('ok')}
      else{resolve('cancel')}
    }).catch(() => console.log('Oops errors!'));
}

	render() {
		return (
			<div className = 'button'>{this.state.title}
       {this.state.btnArray.map(item => <button key={item.id} onClick={this.componentClick}>{item.name}</button>)}
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
        <div className="loading_content">
           <DButton/>
        </div>
			</div>
		);
  }
}

let node = null 
const confirm = {
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

export default confirm
