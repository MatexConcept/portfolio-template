import './FormStyle.css'


const Form = () => {
  return (
    <div className='from'>
        <form>
            <label>Your Name</label>
            <input type='test'></input>

            <label>Email</label>
            <input type='email'></input>

            <label>Subject</label>
            <input type='test'></input>

            <label>Message</label>
            <textarea rows='6' placeholder='Type your message here'/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form