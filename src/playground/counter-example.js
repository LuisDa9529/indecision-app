class Counter extends React.Component {
    constructor(props){
        super(props)
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const storageCount = parseInt(localStorage.getItem('count'), 10);

        if(!isNaN(storageCount)){
            this.setState(() => ({ count: storageCount }));
            console.log('CREATED', storageCount);
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count){
            console.log('UPDATED');
            localStorage.setItem('count', this.state.count);
        };
        
    }
    addOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            };
        });    
    }
    minusOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count - 1
            };
        }); 
        
    }
    reset(){
        this.setState(() => {
            return{
                count: 0
            }
        });   
    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     console.log("addOne");
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     console.log("minusOne");
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log("reset");
// }


// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();