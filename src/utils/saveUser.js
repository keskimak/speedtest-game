import { database } from "../../firebase";
import { set, ref } from "firebase/database";


export default function saveUser(user) {
    
  
    set(ref(database, "users/" + user.uid), {
      email: user.email,
      username: '',
      bestresult: null,
    });

  
  }