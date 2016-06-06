import React    from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Environment: {__NODE_ENV__}</h1>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.querySelector('#root'));