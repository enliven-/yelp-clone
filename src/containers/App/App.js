import React    from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1><i className="fa fa-star"></i>Environment: {__NODE_ENV__}</h1>
      </div>
    );
  }
});


module.exports = App;