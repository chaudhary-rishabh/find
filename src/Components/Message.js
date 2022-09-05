import React, { useState } from 'react'
import Navbar from './Navbar'
import '../Style/message.css';
import headpic from '../images/profileimg.jpg'; 

const Message = () => {
  return (
    <div>
      <div className='navdiv'><Navbar /></div>
      <div className='mainmessage'>
        <MessageBox />
        <MessageList />
      </div>
    </div>
  )
};

const MessageBox = () => {
  var date = new Date();
  var messagetime = date.toDateString();
  return (
    <div className='messagebox'>
        <MessageHeader headpic={headpic} messageheader='Rishabh'/>
      <div>
        <MessagesReceive message='hey' time={messagetime} />
        <MessagesReceive message='Whats up' time={messagetime} />
        {/* <MessageSend message='Nothing much' time={messagetime}/> */}
      </div>
      <MessageSendType/>
    </div>
  )
};

const MessageList = () => {
  return (
    <div className='messagelist' >
      <h2 className='messagelistheader'>All Chats</h2>
      <MessageListChild name='Ritik' headpic={ headpic } message='This is my message' />
      <MessageListChild name='Rishabh' headpic={ headpic } message='This is my message' />
      <MessageListChild name='Sumit' headpic={ headpic } message='This is my message' />
      <MessageListChild name='Vivek' headpic={ headpic } message='This is my message' />
      <MessageListChild name='Varun' headpic={ headpic } message='This is my message' />
      <MessageListChild name='Arijeet' headpic={ headpic } message='This is my message' />
      <MessageListChild name='Nidhi' headpic={ headpic } message='This is my message' />
      <MessageListChild name='Aarushi' headpic={ headpic } message='This is my message' />
      <MessageListChild name='Dhwani' headpic={ headpic } message='This is my message' />
    </div >
  )
};

const MessagesReceive = (props) => {
  return (
    <div>
      <h3 className='messagereceive'>{props.message}</h3>
      <p className='date'>{props.time}</p>
    </div>
  )
};
// const MessageSend = (props) => {
//   return (
//     <div>
//       <h2 className='messagesend'>{props.message}</h2>
//       <p  className='date'>{props.time}</p>
//     </div>
//   )
// }

const MessageHeader = (props) => {
  return (
    <section className='messageheader'>
      <img id='headpic' src={props.headpic} alt='headpic' height='50px' width='50px' />
      <h2>{props.messageheader}</h2>
    </section>
  )
};

const MessageListChild = (props) => {
  return (
    <section className='messagelistchild'>
      <img id='headpic' src={props.headpic} alt='headpic' height='50px' width='50px' />
      <div style={{ display:'block'}}>
      <h3>{props.name}</h3>
        <p>{props.message}</p>
      </div>
    </section>
  )
};

const MessageSendType = () => {
  var [message, setMessage] = useState("");
  var handleMessage = (e) => {
    setMessage(e.target.value);
  }
  var handleSend = (e) => {
    e.preventDefault();
    console.log(message);
  }
  return (
    <div className='messagesendtype'>
      <form onSubmit={handleSend}>
        <input onChange={handleMessage} className='input' type='text' name='message' />
        <button className='send' type='submit'>Send</button>
      </form>
    </div>
  )
}
export default Message