import React, { createContext, useContext } from 'react'
import io, { Socket } from "socket.io-client"
interface Props {
    children: JSX.Element;
}
interface ContextValueType {
    socket: Socket,
}
const Context = createContext<ContextValueType | null>(null);
const SocketProvider = ({children}: Props   ) => {
    const socket = io("http://localhost:3001").connect();
  return (
    <Context.Provider value={{
        socket
    }}>
        {children}
    </Context.Provider>
  )
}

export const useSocketContext = () => {
    return useContext(Context)
}
export default SocketProvider