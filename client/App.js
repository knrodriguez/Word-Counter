import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <textarea cols="40" rows="5"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))