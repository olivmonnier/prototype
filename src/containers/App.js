import { connect } from 'react-redux';

import App from '../components/App';

import {
  addDirectory,
  updateDirectory,
  deleteDirectory,
} from '../actions';

function mapStateToProps(state) {
  const { directories } = state;

  return {
    directories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddDirectory(name) {
      dispatch(addDirectory(name))
    },
    handleDeleteDirectory(id) {
      dispatch(deleteDirectory(id))
    },
    handleUpdateDirectory(id, ...rest) {
      dispatch(updateDirectory(id, rest))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);