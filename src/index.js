import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDjbtUYh0N5ieHPqea0IHRXRD4fV8jEtPw';

// Create a new component. This component should produce some HTML
const App = () => {
    return <div>https://www.udemy.com/react-redux/learn/v4/t/lecture/4288046?start=0</div>;
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));