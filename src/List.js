import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class List extends React.Component
{
    render()
    {
        return(
            <div>
                <ul className="list-group">
                    {this.props.items.map(i => {
                        return(
                        <li key={i.id} className="list-group-item">
                            <span>{i.task}</span>
                            <button className="float-right btn btn-danger" onClick={this.props.handleDelete.bind(this, i)}>Delete</button>
                        </li>
                    );
                    })}
                </ul>
            </div>
        )
    }
}

export default List;