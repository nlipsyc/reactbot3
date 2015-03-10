import React from 'react';

module.exports = React.createClass({
  getInitialState: function() {
    return {i: 0};
  },
  handleClick: function(event) {
    this.setState({i: +this.state.i + 1});
  },
  render: function() {
    var counter = this.state.i,
        plurals = counter !== 1 ? 's' : '';
    return (
      <div className ={'counterButton'} onClick={this.handleClick}>
        This has been clicked {counter} time{plurals}.
      </div>
    );
  }
});
