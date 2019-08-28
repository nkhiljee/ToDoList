import React from "react"

export default class Task extends React.Component{

// const style = {
// 	font-size: '50px'
// }

	render(){
		console.log(this.props.item)
		return(
			<div>
			{(this.props.item.done === false) ? <div><h3 >{this.props.item.description}</h3><h4> {this.props.item.due_date}</h4> <button className="btn btn-info" onClick = {() => this.props.do_undo(this.props.item.id)}> {(this.props.item.done === true) ? "Undo": "Done!"} </button></div>:
			<div><h3 ><s>{this.props.item.description}</s></h3><h4><s> {this.props.item.due_date}</s></h4><button className="btn btn-info disabled" onClick = {() => this.props.do_undo(this.props.item.id)}> {(this.props.item.done === true) ? "Undo": "Done!"} </button></div>}
			
			<br/>
			</div>
			)
	}

}