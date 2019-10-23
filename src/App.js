import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import List from "./List";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
    state={ list:[] }

    componentDidMount()
    {
        axios.get("http://localhost:8080/dodos").then(success => {
            this.setState({
                list:success.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    addItem = item =>{
        axios.post("http://localhost:8080/dodos", {task: item}).then(item => {
            this.setState({
                list: [...this.state.list, item.data]
            })
        }).catch(
            error => {
                console.log(error)
            })
    }

    handleDelete = remove => {
        console.log(remove.id)
        axios.delete("http://localhost:8080/dodos/"+remove.id).then(response => {
            this.setState({
                list:this.state.list.filter(i => i !== remove)
            })
        }).catch(error => {
            console.log(error)
        })
    }

  render() {
    return (
      <div>
        <Navbar />
        <Form addItem = {this.addItem}/>
        <List items = {this.state.list} handleDelete = {this.handleDelete}/>
      </div>
    );
  }
}

export default App;
