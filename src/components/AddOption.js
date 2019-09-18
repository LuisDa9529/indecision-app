import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleAddOption = (e) => {
        e.preventDefault();

        const text = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(text);

        this.setState(() => ({ error }))
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Options</button>
                </form>
            </div>
        );
    }
}