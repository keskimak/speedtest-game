import { getDatabase, ref, child, push, set, update, snapshot, onValue } from "firebase/database";
import { database } from "../../firebase";
import React, {useState, useEffect} from "react";


export default function saveResult(user, result) {

  const [previousResult, setPreviousResult] = React.useState([]);

//Get all scores
  useEffect(() => {
    const itemsRef = ref(database, 'scores/'+user.uid);
    onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        setPreviousResult(Object.values(data));
    })
}, []);


  // A post entry.
  const postData = {
    uid: user.uid,
    nickname: user.nickname,
    result: result
  };
//Modify this so that only the personal best is saved!!!!!!


  // Get a key for a new Post.
  const newPostKey = push(child(ref(database), 'scores')).key;

 

    set(ref(database, "scores/" + user.uid+"/"+newPostKey), {
      result: result,
   
    });
    
 
   

}
