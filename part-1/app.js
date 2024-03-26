// const container = document.getElementById('react-container')

// ReactDOM.render("Hello! I am CDN.", container);
// render(make)("what to render" (i.e Hello...) & "where to render" (container));

// Functional Component

const Container = () => {
    return React.createElement(`div`, null, `Hey Kalvians! welcome to React Learning!`,
    React.createElement(`div`, null, `Let's rock and roll`)
    );

}

const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container), container);

// Class Component
// class ReactContainer extends ReactComponent{
//     // Constructor Here

//     render(){
//         return ReactContainer.createElement(`div`, null, `Hey Kalvians! welcome to React Learning!`,
//             React.createElement(`div`, null, `Let's rock and roll`)
//             );
//     }
// }
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container), container);
