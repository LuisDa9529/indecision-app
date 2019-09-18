console.log("App.js is running");

// JSX - Javascript  XML
const app = {
    title: "Indesicion App",
    subtitle: "Whatever you'd like",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log('submited');

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderForm();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);

};

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? "Here are the options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Options</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
};

renderForm();




// const user = {
//   name: "Daniel",
//   age: 25,
//   location: "NL"
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return undefined;
//   }
// }

// const myTemplate = (
//   <div>
//     <h1>{user.name ? user.name : "Annonymous"}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );