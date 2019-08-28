import React from "react"

export default class ItemForm extends React.Component{
	render(){
		console.log()
		return(
			<div>
			<h2>Make New Task</h2>
				<form onSubmit = {(e) => this.props.add(e)}>
					<input type = "text" placeholder = "Description"  />
					<input type = "text" placeholder = "MM.DD.YYYY"  />

					<input className="btn btn-success" type="submit" value = "Add to the list"  />

				</form>
			</div>
			)
	}

}