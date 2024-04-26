function addtodo(){
    var input = document.getElementById("inputwork")
var liElement=document.createElement("li")
var liText =document.createTextNode(input.value)
liElement.appendChild(liText)
console.log(liElement)
var dltbtn=document.createElement("button");
var dltText=document.createTextNode("Delete");
dltbtn.appendChild(dltText)

dltbtn.setAttribute("onclick","dltItem(this)")


var list =document.getElementById("list");

liElement.appendChild(dltbtn);
list.appendChild(liElement)
var EditBtn =document.createElement("button")
var EditText=document.createTextNode("Edit")
EditBtn.appendChild(EditText)
EditBtn.setAttribute("onclick","EditItem(this)")

liElement.appendChild(EditBtn);
input.value="";

}

function deleteAll(e){
var list =document.getElementById("list");
list.innerHTML="";
}

function dltItem(e){
e.parentNode.remove();
}

function EditItem(e){
    var userinput=prompt("Enter your value",
  e.parentNode.firstChild.nodeValue
    );
    e.parentNode.firstChild.nodeValue=userinput;
}