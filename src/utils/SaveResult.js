import {  ref, child, push, set, update, snapshot, onValue } from "firebase/database";
import { database } from "../../firebase";
import React, { useState, useEffect } from "react";


export default function saveResult(user, result) {

  const [previousResults, setPreviousResults] = useState([]);

  //Get all scores from all players
/*  useEffect(() => {
    const itemsRef = ref(database, 'scores/');
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setPreviousResults(Object.values(data));
    })
  }, []);

*/
  // A post entry.
  const postData = {
    uid: user.uid,
    result: result
  };
  //Modify this so that only the personal best is saved!!!!!!


  // Get a key for a new Post.
  const newPostKey = push(child(ref(database), 'scores')).key;

  set(ref(database, "scores/" + user.uid + "/" + newPostKey), {
    result: result,
   

  });




}
