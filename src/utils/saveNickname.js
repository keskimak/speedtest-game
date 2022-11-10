//Save alias if wanted. Do a settings screen instead? (=alias, save my results to common db jne )
import { database } from "../../firebase";
import { push, ref, update } from "firebase/database";
import { Alert } from "react-native";


export default function saveNickname(uid, nickname){
    //not working atm

    try {
        update(ref(database, "users/" + uid), {
     
            nickname: nickname,
        
          });
        
    } catch (error) {
        Alert.alert(error)
        
    }
  



}