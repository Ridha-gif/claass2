var msg="";
var room_name="";
var user_name="";
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
var firebaseConfig = {
    apiKey: "AIzaSyCOGw8JNx4ADvCelnvV2zuh7-0M5meXscM",
    authDomain: "class-93-4819f.firebaseapp.com",
    databaseURL: "https://class-93-4819f-default-rtdb.firebaseio.com",
    projectId: "class-93-4819f",
    storageBucket: "class-93-4819f.appspot.com",
    messagingSenderId: "1098250623780",
    appId: "1:1098250623780:web:17480dfa2780a1eaea31b1",
    measurementId: "G-064W5E6DTT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
} });  }); }





  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
}
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        like:0,
        message:msg
    })
    
}

