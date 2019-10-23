import React from "react";

class Form extends React.Component
{
    state= { list:"" }

    handleInput = event => {
        this.setState({
            list: event.target.value
        })
    }

    addTask = () => {
        this.props.addItem(this.state.list);
        this.setState({list:""})
    };

    render()
    {
        return(
            <div>
                <input type="text" className="form-control" onChange={this.handleInput} value={this.state.list}/>
                <button className="btn btn-success form-control" onClick={this.addTask} >Add Task</button>
            </div>
        )
    }
}

export default Form;