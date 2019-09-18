import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
            props.options.map((option) => {
                return (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                    />
                )
            })
        }
    </div>
)

export default Options;

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