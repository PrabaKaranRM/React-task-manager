import React, {useState} from 'react'


const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
 
    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text) {
            alert("Please add task");
            return;
        }

        onAdd({ text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }


  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Choose Your Task</label>
            <input type='text' value={text} placeholder="Add task" onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>time</label>
            <input type='text' value={day} placeholder="Time" onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block' ></input>
    </form>
  )
}

export default AddTask