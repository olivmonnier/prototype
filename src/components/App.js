import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class App extends React.Component {
  render() {
    const { props } = this.props;

    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(states) {
  return {
    states
  }
}

function mapDispatchToProps(dispatch) {
  actions: bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);