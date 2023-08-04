import { useSocketContext } from "../../../context/SocketProvider"
import style from "./login.module.css"
import { useNavigate } from "react-router";
import { useRoomContext } from "../../../context/RoomProvider";
const Login = () => {
  const socketContext = useSocketContext();
  const roomContext = useRoomContext();
  const navigate = useNavigate();
  const join_room = () => {
    const data = {
      name: roomContext?.name,
      room: roomContext?.room
    }
    if(socketContext) {
      socketContext.socket.emit('join_room', data);
    }
    navigate('/chat-room');
  }
  return (
    <div className={style.login}>
        <h1 className={style.login_heading}>Real-time Chat</h1>
        <form className={style.login_form} onSubmit={e => e.preventDefault()}>
            <div className={style.name_input}>
                <label htmlFor="">your name</label>
                <input onChange={e => roomContext?.setName(e.target.value)} type="text" />
            </div>
            <div className={style.room_input}>
                <label htmlFor="">room number</label>
                <input onChange={e => roomContext?.setRoom(e.target.value)} type="text" />
            </div>  
            <button disabled={roomContext?.name == "" || roomContext?.room == ""} onClick={() => join_room()}>Join Room</button>
        </form>
    </div>
  )
}

export default Login