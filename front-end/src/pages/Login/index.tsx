import style from "./login.module.css"
const Login = () => {
  return (
    <div className={style.login}>
        <h1 className={style.login_heading}>Real-time Chat</h1>
        <form className={style.login_form} action={""}>
            <div className={style.name_input}>
                <label htmlFor="">your name</label>
                <input type="text" />
            </div>
            <div className={style.room_input}>
                <label htmlFor="">room number</label>
                <input type="text" />
            </div>  
            <button>Join Room</button>
        </form>
    </div>
  )
}

export default Login