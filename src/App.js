import React from 'react';
import logo from './logo.svg';
import './App.css';
import list from "./list.js"
import RenderList from "./RenderList"
import ItemForm from "./ItemForm"

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      list: list,
      flag: false,
      welcomeFlag: true
    }
  }

  add = (e) => {
    e.preventDefault()
    console.log(e.target)

    if (e.target[0].value == "" || e.target[1].value == "") {
      this.setState({flag : true})
    } else{

    let array = [...this.state.list, {
        id: this.state.list.length,
        description: e.target[0].value,
        due_date: e.target[1].value,
        done: false}]

     this.setState({list: array}) 

  }}

  do_undo = (id) =>{
   console.log("do_undo " + id)
    let new_array = this.state.list
    let ch_item ={}
    new_array.forEach(item => {
       if (item.id === id) {
           ch_item = item
           ch_item.done = !item.done//item.done = !item.done
       }
    })

    let new_array2 = this.state.list.filter(function(value, index, arr){
      return value.id != id;
    });
    new_array2.push(ch_item)
    console.log(new_array2)
  this.setState({list: new_array2})

  }

  unflag = () =>{
    this.setState({flag : false})
  }
  welcome = () =>{
    this.setState({welcomeFlag : false})
  }

  render () {
    let h1Style = {
      // color: 'blue',
      'font-size': '90px',
    };

    return (


      <div className="App">

      { this.state.welcomeFlag == true ? 
        <div class="modal" id="mymodal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title">Welcome</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"  onClick={() => this.welcome()}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body"><br/>
                <h3>This is a To Do App. Get ready to organize your life.</h3><br/>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal" onClick={() => this.welcome()}>Close</button>
              </div>
            </div>
          </div>
        </div>
      : ""
    }





      { this.state.flag == true ? 
         
            <div class="alert alert-dismissible alert-danger">
             <button onClick={this.unflag} type="button" class="close" data-dismiss="alert">&times;</button>
             <strong>Oh snap!</strong> Fill everything in and try submitting again.
           </div>
         :""
      } 
    
        <header className="App-header">
          <h1 style={h1Style}> TO DO</h1>
          <br/>
          <ItemForm add={this.add}/>
          <br/>
          <RenderList list={this.state.list} do_undo = {this.do_undo}/>
        </header>
      </div>
    );
  }
}




export default App;
