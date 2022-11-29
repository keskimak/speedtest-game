import { getDatabase, ref, child, push, set, update } from "firebase/database";
import { database } from "../../firebase";

export default function saveResult(user, result) {


  // A post entry.
  const postData = {
    uid: user.uid,
    nickname: user.nickname,
    result: result
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(database), 'scores')).key;

  
    set(ref(database, "scores/" + user.uid), {
      result: result,
   
    });

}
