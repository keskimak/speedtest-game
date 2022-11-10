export default function saveUser(user) {
    const db = getDatabase(firebaseApp);
  
    set(ref(db, "users/" + user.uid), {
      email: user.email,
      username: null,
      bestresult: null,
    });
  }