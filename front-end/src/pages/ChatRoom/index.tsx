import { AiOutlineSend } from "react-icons/ai";
import style from "./chat_room.module.css";
import { useSocketContext } from "../../../context/SocketProvider";
import { useRoomContext } from "../../../context/RoomProvider";
import { useEffect, useRef } from "react";

const ChatRoom = () => {
  const socketContext = useSocketContext();
  const roomContext = useRoomContext();
  const messRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    socketContext?.socket.on('receive_message', (data) => {
      console.log(data);
    })
  },[socketContext?.socket])

  const sendHandle = () => {
    if (messRef.current) {
    const data = {
      author: roomContext?.name,
      room: roomContext?.room,
      message: messRef.current.value
    }
    socketContext?.socket.emit('send_message', data);
  }
  }
  return (
    <div className={style.chat_room}>
      <h1 className={style.chat_heading}>Room 2023</h1>
      <div className={style.chat_container}>
        <div className={`${style.message} ${style.message__me}`}>
          <div className={style.message_content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            blanditiis!
          </div>
          <span className={`${style.message_meta}`}>{`10:00 | Robert`}</span>
        </div>
      </div>
      <div className={style.chat_input}>
        <input ref={messRef} type="text" placeholder="Type your message..." />
        <span onClick={() => sendHandle()}>
          <AiOutlineSend />
        </span>
      </div>
    </div>
  );
};

export default ChatRoom;
