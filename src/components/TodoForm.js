import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        console.log("TodoForm props", props);
        super(props);
        this.state = {
            task: ""
        };
    }

    

    handleChanges = e => {
        this.setState({
            task: e.target.value
        });

    };

    handleAddItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.task);
    };

    itemComplete = e => {
        e.preventDefault();
        this.props.clearCompleted(this.state.task);
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddItem}>
                    <input 
                        type="text" 
                        name="item" 
                        placeholder="...to do"
                        value={this.state.task}
                        onChange={this.handleChanges} />
                    <button>Add Item</button>
                    <button className="clear-btn" onClick={this.itemComplete}>Clear Completed</button>
                </form>
                
            </div>
        )
    }
    
};

export default TodoForm;