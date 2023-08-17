const firebaseConfig = {
    apiKey: "AIzaSyCSAtRrq-SltSFRc5FPMIWBiOiTWRhT64I",
    authDomain: "class-test-9f200.firebaseapp.com",
    databaseURL: "https://class-test-9f200-default-rtdb.firebaseio.com",
    projectId: "class-test-9f200",
    storageBucket: "class-test-9f200.appspot.com",
    messagingSenderId: "841849796254",
    appId: "1:841849796254:web:bc8f65c1e21a481f10ed8f"
  }; 
    const app = initializeApp(firebaseConfig);
    function adduser(){
        user_name=document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose:"adding_user"
        });
        
    }