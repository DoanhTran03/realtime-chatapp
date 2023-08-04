import { createContext, useContext, useState } from "react";

interface Props {
    children: JSX.Element;
}
interface ContextValueType {
    name: string,
    setName:  React.Dispatch<React.SetStateAction<string>>,
    room: string,
    setRoom:  React.Dispatch<React.SetStateAction<string>>;
}
const Context = createContext<ContextValueType | null>(null);
const RoomProvider = ({children}: Props) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
  return (
    <Context.Provider value={
        {name, setName, room, setRoom}
    }>
        {children}
    </Context.Provider>
  )
}

export const useRoomContext = () => {
    return useContext(Context);
}

export default RoomProvider