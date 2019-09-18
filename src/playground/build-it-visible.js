class VisibilityToogle extends React.Component {
    constructor(props){
        super(props)
        this.onToogle = this.onToogle.bind(this);
        this.state = {
            visible: false
        }
    }
    onToogle(){
        this.setState((prevState) => {
            return{
                visible: !prevState.visible
            };
        });
        
    }
    render() {
        return(
            <div>
            <h1>Visibility Toogle</h1>
            <button onClick={this.onToogle}>
                {this.state.visible ? 'Hide text': 'Show text' }
            </button>
            {this.state.visible && (
                <div>
                    <p>Can you see this text? </p>
                </div>
            )}
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToogle/>, document.getElementById('app'));

