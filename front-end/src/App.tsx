import { BrowserRouter } from "react-router-dom";
import SocketProvider from "../context/SocketProvider";
import RoomProvider from "../context/RoomProvider";
import Router from "./pages/Router";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <>
      {/* <SocketProvider>
        <RoomProvider>
          <BrowserRouter>
            <Router></Router>
          </BrowserRouter>
        </RoomProvider>
      </SocketProvider> */}
      <ChatRoom></ChatRoom>
    </>
  );
}

export default App;
