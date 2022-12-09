import { onValue, ref } from "firebase/database";
import { useState } from "react";
import { useEffect } from "react";
import { database } from "../../firebase";

export default (uid) => {

    const [userDetail, setUserDetail] = useState({
            email: "",
            nickname: ""
    });

    useEffect(() => {

        const userRef = ref(database, 'users/' + uid);
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            console.log(Object.values(data))
           //setUserDetail(Object.values(data));

        })

    }, []);
    return [userDetail];

}



