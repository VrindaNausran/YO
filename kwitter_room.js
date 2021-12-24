
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBPmOl0y573dGNQDnaY4bQ9sL1pCAMI0mg",
      authDomain: "kwitter2-f9f97.firebaseapp.com",
      databaseURL: "https://kwitter2-f9f97-default-rtdb.firebaseio.com",
      projectId: "kwitter2-f9f97",
      storageBucket: "kwitter2-f9f97.appspot.com",
      messagingSenderId: "1006255299007",
      appId: "1:1006255299007:web:f89d0e5fc62bd8bb0b690a"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

   function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names );
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id);' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();




function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

