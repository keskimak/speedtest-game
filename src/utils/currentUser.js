import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { auth, database } from "../../firebase";

export default function getUser () {
    const uid = auth.currentUser.uid;
    const [currentUser, setCurrentUser ]= useState({
        email: "",
        nickname: "", 
        personalbest: null
    });

    useEffect(() => {
        const userRef = ref(database, 'users/' + uid);
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            setCurrentUser({ 
                "email": data.email,
                 "nickname": data.nickname,
                  "personalbest": data.personalbest,
                  });

        })

    }, []);
    return { currentUser };
}




