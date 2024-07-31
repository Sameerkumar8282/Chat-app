import axios from 'axios';
import { useEffect, useState } from 'react';

const Chat = () => {

  const [chats, setChats] = useState([])

  const fetchChats = async() =>{
    const {data} = await axios.get('/chats');
    setChats(data)
  }

  useEffect(() => {
    fetchChats()
  }, [])
  
  return (
    <div>{chats.map((chat)=>{
      <div key={chat.id}>{chat.chatName}</div>
    })}</div>
  )
}

export default Chat;