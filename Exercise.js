let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(element,index,title){
var addtxt=document.getElementById('note');
var notes=localStorage.getItem('notes');
if(notes==null){
  noteObj=[];
}
else{
  noteObj=JSON.parse(notes);
}
noteObj.push(addtxt.value);
localStorage.setItem('notes',JSON.stringify(noteObj))
addtxt.value='';
showNote();
});

// Function for Show Notes

showNote=()=>{
  var notes=localStorage.getItem('notes');
  if(notes==null){
    noteObj=[];
  }
  else{
    noteObj=JSON.parse(notes);
  }
  let html='';
  noteObj.forEach(function(element,index) {
    html +=`
    <div class="noteCard card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">Note ${index + 1}</h5>
       <p class="card-text">${element}</p>
      <a id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete</a>
     </div>
  </div>
    `;
    let notElem=document.getElementById('notes');
    if(notes!=0){
      notElem.innerHTML=html;
    }
    else{

    }

  });
}
showNote();

// Function For Delete

deleteNote=(index)=>{
  var notes=localStorage.getItem('notes');
  if(notes==null){
    noteObj=[];
  }
  else{
    noteObj=JSON.parse(notes);
  }
  noteObj.splice(index,1);
  localStorage.setItem('notes',JSON.stringify(noteObj));
  showNote();
}
//Search Function

let searchTxt=document.getElementById('searchTxt');
searchTxt.addEventListener('input',(element)=>{
let inputval=searchTxt.value.toLowerCase();
noteCard=document.getElementsByClassName('noteCard');
Array.from(noteCard).forEach((element)=>{
let cardttxt=element.getElementsByTagName('p')[0].innerText;
if(cardttxt.includes(inputval)){
  element.style.display='block';
}
else{
  element.style.display='none';
}
});
inputval.value='';
});

































// let addBtn = document
//   .getElementById("addBtn")
//   .addEventListener("click", function (e) {

//     //Function To Insert Item In LocalStorage

//     var addTxt = document.getElementById("note");
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//       noteObj = [];
//     } else {
//       noteObj = JSON.parse(notes);
//     }
//     noteObj.push(addTxt.value);
//     localStorage.setItem("notes", JSON.stringify(noteObj));
//     addTxt.value = " ";
//     // console.log(noteObj);
//     showNotes();
//   });

//   //Function to SHow Storage From Local Storage
// showNotes = () => {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     noteObj = [];
//   } else {
//     noteObj = JSON.parse(notes);
//   }
//   let html = "";
//   noteObj.forEach(function (element, index) {
//     html += `
//     <div class="noteCard card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">Note ${index + 1}</h5>
//       <p class="card-text">${element}</p>
//       <a id="${index}" onclick="DeleteNode(this.id)" class="btn btn-danger">Delete</a>
//     </div>
//   </div>
//     `;
//   });
//   let notElem = document.getElementById("notes");
//   if (notes != 0) {
//     notElem.innerHTML = html;
//   }
//   else{
//     notElem.innerText='Nothing To Show Add Notes To See'
//   }
// };
// showNotes();

// //Function To Delete Node

// DeleteNode=(index)=>{
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     noteObj = [];
//   } else {
//     noteObj = JSON.parse(notes);
//   }
//   noteObj.splice(index,1);
//   localStorage.setItem('notes',JSON.stringify(noteObj));
//   showNotes();
// }

// //Function To Seacrh Item

// let search=document.getElementById('searchTxt');
// search.addEventListener('input',function(element){
//   let inputVal=search.value;
//   let notecard=document.getElementsByClassName('noteCard');
//   Array.from(notecard).forEach(function(element){
// let cardTxt=element.getElementsByTagName('p')[0].innerText;
// if(cardTxt.includes(inputVal)){
//   element.style.display='block';
// }
// else{
//   element.style.display='none';
// }
//   });
//   inputVal.value='';
// });