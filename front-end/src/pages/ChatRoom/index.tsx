import {AiOutlineSend} from "react-icons/ai"
import style from "./chat_room.module.css"
const ChatRoom = () => {
  return (
    <div className={style.chat_room}>
      <h1 className={style.chat_heading}>Room 2023</h1>
      <div className={style.chat_container}>
        <div className={`${style.message} ${style.message__me}`}>
          <div className={style.message_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, blanditiis!</div>
          <span className={`${style.message_meta}`}>{`10:00 | Robert`}</span>
        </div>
      </div>
      <div className={style.chat_input}>
        <input type="text" placeholder="Type your message..."/>
        <span>
          <AiOutlineSend/>
        </span>
      </div>
    </div>
  )
}

export default ChatRoom