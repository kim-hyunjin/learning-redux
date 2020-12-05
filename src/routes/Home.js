import React, {useState} from 'react';
import { connect } from 'react-redux';
import { actionCreators} from '../store';

function Home({todos, addToDo}) {

  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {JSON.stringify(todos)}
      </ul>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  return {todos: state};
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);