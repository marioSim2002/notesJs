function addNote() {
  // Get the text from the input field
  const noteText = document.getElementById("notetxt").value;

  // Check if the note text is empty
  if (noteText.trim() === "") {
    return; // exit the function if the note text is empty
  }

  // Create a new div element with some styling
  const noteContainer = document.createElement("div");
  noteContainer.style.position ="relative";
  noteContainer.style.top = "50px";
  noteContainer.style.display = "flex";
  noteContainer.style.justifyContent = "space-between";
  noteContainer.style.backgroundColor ="darkslateblue"
  noteContainer.style.borderRadius = "13px";
  noteContainer.style.padding = "8px";

  // Create a new div element for the note with some styling
  const noteDiv = document.createElement("div");
  noteDiv.style.backgroundColor = "darkslateblue";
  noteDiv.style.padding = "8px";
  noteDiv.innerHTML = noteText;
  noteDiv.style.fontSize ="larger";
  noteDiv.style.fontFamily=" system-ui";
  noteDiv.style.color = "white";


  // Create a new button for deleting 
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.style.color = "red";
  deleteButton.style.backgroundColor = "white";
  deleteButton.style.border = "1px solid red";
  deleteButton.style.fontSize = "larger";
  deleteButton.style.borderRadius ="30px";

  deleteButton.addEventListener("click", function() {
    noteContainer.remove();
  });

  // Add the note div and delete button to the container
  noteContainer.appendChild(noteDiv);
  noteContainer.appendChild(deleteButton);


  // Append the note container to the document body
  document.body.appendChild(noteContainer);

  // Clear the input field
  document.getElementById("notetxt").value = "";
}

// Get a reference to the "Add Note" button
const addButton = document.getElementById("add");

// Attach a click event listener 
addButton.addEventListener("click", addNote);



// greeting according to time 
var myDate = new Date();
var hrs = myDate.getHours();

var greet;
if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

document.getElementById('mainHeader').innerHTML ='<b>' + greet + '</b>';