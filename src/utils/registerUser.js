import { database } from "../../firebase";
import { set, ref } from "firebase/database";


export default function registerUser(user, nickname) {
  
  
    set(ref(database, "users/" + user.uid), {
      email: user.email,
      nickname: nickname,
      bestresult: 0,
    });

  
  }