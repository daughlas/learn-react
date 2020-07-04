import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAddItemAction, getChangeInputValueAction, getDeleteItemAction} from './store/actionCreators'

const TodoList = (props) => {
  const {inputValue, list, changeInputValue,handleClick, handleDelete } = props
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={changeInputValue}
          type="text"/>
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) =>  (
            <li onClick={() => {handleDelete(index)}} key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = getChangeInputValueAction(e.target.value)
      dispatch(action)
    },
    handleClick() {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDelete(index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
