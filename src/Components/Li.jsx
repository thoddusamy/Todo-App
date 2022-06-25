function Li({ data, strikeOutTask, deleteTask }) {
  return (
    <div className={data.display ? 'li-lists' : 'display'}>
      <li className={data.isStrike ? 'strike-out' : ''}>{data.text}</li>
      <div className='li-btns'>
        <button
          onClick={() => strikeOutTask(data.id)}
          className={
            data.isStrike
              ? 'btn btn-warning btn-sm li-btn'
              : 'btn btn-success btn-sm li-btn'
          }
        >
          {data.isStrike ? (
            <i className='fa-solid fa-arrow-rotate-right'></i>
          ) : (
            'Completed'
          )}
        </button>
        <button
          onClick={() => deleteTask(data.id)}
          className='btn btn-danger btn-sm'
        >
          <i className='fa-solid fa-trash'></i> Delete
        </button>
      </div>
    </div>
  )
}

export default Li
