
const firebaseConfig = {
      apiKey: "AIzaSyCrxeCi9IgLvQFAS8yj5dmKBPc7GBIgSdE",
      authDomain: "y-database-c47a3.firebaseapp.com",
      databaseURL: "https://y-database-c47a3-default-rtdb.firebaseio.com",
      projectId: "y-database-c47a3",
      storageBucket: "y-database-c47a3.appspot.com",
      messagingSenderId: "851030075038",
      appId: "1:851030075038:web:2f42d036ec3d5c32af3d8f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      Name = message_data['name']
      message = message_data['message']
      like = message_data['like']
      Name_with_tag = "<h4>" + Name +"<img class='user_tick.' src = 'tick.png'></h4>"
      message_with_tag = "<h4 class='message_h4'>" +message + "</h4>"
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-down'>like: "+ like +"</span></button><hr>"   
      
      row = Name_with_tag + message_with_tag + like_button
      document.getElementById("output").innerHTML +=row 
      //End code
      });});}
getData(); 

function addRoom()
{
      user_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"
      })
}

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"


}

function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"

}

function updateLike(message_id)
{
      console.log("clicked on the button -"+ message_id )
      button_id = message_id
      likes = document.getElementById(button_id).value
      updated_likes = Number(likes) +100
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
            
      })
}