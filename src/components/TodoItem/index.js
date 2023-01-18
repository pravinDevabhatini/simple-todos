import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  onClickDeleteButton = () => {
    const {todoInfo, deleteToDo} = this.props
    const {id} = todoInfo
    deleteToDo(id)
  }

  render() {
    const {todoInfo} = this.props
    const {title} = todoInfo

    return (
      <li>
        <p>{title}</p>
        <button type="button" onClick={this.onClickDeleteButton}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
