import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Li from './Components/Li'
import { useState } from 'react'

function App() {
  const [list, setList] = useState([])
  const [text, setText] = useState('')

  let addTask = () => {
    setList([
      ...list,
      { id: list.length + 1, text: text, isStrike: false, display: true },
    ])
  }

  let strikeOutTask = (id) => {
    let findIndex = list.findIndex((obj) => obj.id == id)
    if (list[findIndex].isStrike == false) {
      list[findIndex].isStrike = true
    } else {
      list[findIndex].isStrike = false
    }
    setList([...list])
  }

  let deleteTask = (id) => {
    let findDltIndex = list.findIndex((obj) => obj.id == id)
    list[findDltIndex].display = false
    setList([...list])
  }

  return (
    <div className='container text-white text-center'>
      <h1 className='pt-4'>Todo App</h1>
      <p className='pt-2'>
        Simply set your work/task to this app and finish it ✌️😋
      </p>

      <div className='search-bar pt-5'>
        <input
          type='search'
          placeholder='Save your task'
          onChange={(txtValue) => setText(txtValue.target.value)}
        />
        <button onClick={addTask} className='btn btn-color'>
          ADD
        </button>
      </div>

      <div className='task-li-s'>
        <ul className='li-divs'>
          {list.map((liItem) => {
            return (
              <Li
                data={liItem}
                strikeOutTask={strikeOutTask}
                deleteTask={deleteTask}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
