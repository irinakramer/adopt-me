import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet'

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
