import { database } from "../../firebase";
import { set, ref } from "firebase/database";


export default function registerUser(user) {

     
  
    set(ref(database, "users/" + user.uid), {
      email: user.email,
      bestresult: null,
      nickname: ""
    });

  
  }