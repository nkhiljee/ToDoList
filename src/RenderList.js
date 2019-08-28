import React from "react"
import Task from "./Task"

export default class Render extends React.Component{
	render(){
		console.log(this.props.list)

		return(<div>
			{this.props.list.map(item => {
				return <Task do_undo = {this.props.do_undo} item={item} key={item.id}/>
			})}

		</div>)
	}

}