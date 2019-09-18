class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount(){

        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({ options }));
            }
        }catch(e){

        }

       
        console.log('Created');        
    }
    componentDidUpdate(prevPromps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('Updated');        
    }
    componentWillUnmount(){
        console.log('Destroyed');
        
    }
    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOptionSingular(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick(){
        const random = Math.floor(Math.random() * this.state.options.length)
        console.log(random);
        alert(this.state.options[random])        
    }
    handleAddOptions(option){
        if(!option){
            return 'Error: Enter a new option'
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists.'
        }

        
        this.setState((prevState) => ({ options: prevState.options.concat(option)  }))
    }
    render() {
        const subtitle = "Put your life in the hands of the computer";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}    
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                />
                <AddOption handleAddOption={this.handleAddOptions}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.subtitle} </h2>
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision app'
}
// class Header extends React.Component {
//     render(){       
//        return(
//            <div>
//                 <h1> {this.props.title} </h1>
//                 <h2> {this.props.subtitle} </h2>
//            </div>
//        )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should I do?
                </button>
        </div>
    );
}

// class Action extends React.Component {
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}>
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => {
                    return(
                        <Option 
                            key={option} 
                            optionText={option} 
                            handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                        />
                    )                    
                })
            }
        </div>
    );
}

// class Options extends React.Component {    
//     render(){
//         return (
//         <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//             this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//         </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOptionSingular(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    );
}
// class Option extends React.Component {
//     render() {
//         return (
//         <div>
//             {this.props.optionText}
//         </div>
//         );
//     }
// }
class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();

        const text = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(text);
            
        this.setState(() => ({error}))
    }
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

// const User = () =>{
//     return(
//         <div>
//             <p>Name:</p>
//             <p>Age:</p>
//         </div>
//     )
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));