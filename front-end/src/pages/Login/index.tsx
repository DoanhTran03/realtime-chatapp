import { useState } from "react";
import { useSocketContext } from "../../../context/SocketProvider"
import style from "./login.module.css"
const Login = () => {
  const context = useSocketContext();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  
  const join_room = () => {
    const data = {
      name: name,
      room: room
    }
    if(context) {
      context.socket.emit('join_room', data);
    }
  }
  return (
    <div className={style.login}>
        <h1 className={style.login_heading}>Real-time Chat</h1>
        <form className={style.login_form} onSubmit={e => e.preventDefault()}>
            <div className={style.name_input}>
                <label htmlFor="">your name</label>
                <input onChange={e => setName(e.target.value)} type="text" />
            </div>
            <div className={style.room_input}>
                <label htmlFor="">room number</label>
                <input onChange={e => setRoom(e.target.value)} type="text" />
            </div>  
            <button disabled={name == "" || room == ""} onClick={() => join_room()}>Join Room</button>
        </form>
    </div>
  )
}

export default Login