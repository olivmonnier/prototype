import { connect } from 'react-redux';

import App from '../components/App';

import {
  addFile,
  updateFile,
  deleteFile,
} from '../actions';

function mapStateToProps(state) {
  const { files } = state;

  return {
    files
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddFile(name) {
      dispatch(addFile(name))
    },
    handleDeleteFile(id) {
      dispatch(deleteFile(id))
    },
    handleUpdateFile(id, ...rest) {
      dispatch(updateFile(id, rest))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);