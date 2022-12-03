import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export default function useUserProvider({ children }) {
    const [uid, setUid] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={(
            uid, username, email, password, nickname, isLoggedIn,
            setUid, setUsername, setEmail, setPassword, setNickname, setIsLoggedIn)}
           >
             {children}
            </UserContext.Provider>
    );

}

