import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    clearSelected = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOptionSingular = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[random];
        this.setState(() => ({
            selectedOption: option 
        }));
        //alert(this.state.options[random])
    };
    handleAddOptions = (option) => {
        if (!option) {
            return 'Error: Enter a new option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }


        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };
    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {

        }


        console.log('Created');
    }
    componentDidUpdate(prevPromps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('Updated');
    }
    componentWillUnmount() {
        console.log('Destroyed');

    }
    
    render() {
        const subtitle = "Put your life in the hands of the computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container '>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                    />
                    <AddOption handleAddOption={this.handleAddOptions} />
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        clearSelected={this.clearSelected}/>
                </div>
            </div>
                
        );
    }
}

