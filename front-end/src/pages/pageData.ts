import Login from "../pages/Login"
import ChatRoom from "../pages/ChatRoom"
export interface Page {
    title: string,
    element: () => JSX.Element,
    path: string
}
const pages: Page[] = [
    {
        title: "login",
        element: Login,
        path: "/"
    },
    {
        title: "chat-room",
        element: ChatRoom,
        path: "/chat-room"
    }
]
export default pages