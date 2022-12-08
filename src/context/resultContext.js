import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ResultContext = createContext();

export const useResults = () => useContext(ResultContext);

export default function useUResultProvider({ children }) {
    const [resultIid, setResultId] = useState("");
    const [result, setResult] = useState(null);
    const [userId, setUSerId] = useState("");
   


    return (
        <ResultContext.Provider value={(
            resultIid, result, userId,
            setResultId, setResult, setUSerId)}
           >
             {children}
            </ResultContext.Provider>
    );

}

