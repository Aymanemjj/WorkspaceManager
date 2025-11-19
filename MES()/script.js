const table = document.getElementById("tableContainer")
const tableBody = document.getElementById("userTableBody")
const toast = document.getElementById("emptyMessage")
const tableRow = document.querySelectorAll("tr").forEach(
    row => row.addEventListener("click", editPerson()))

const input1 = document.getElementById("userName")
const input2 = document.getElementById("userEmail")
const input3 = document.getElementById("userAge")
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",addNewPerson())
const resetBtn = submitBtn.nextElementSibling
const cancelBtn = document.getElementById("cancelBtn");

    function displaytoast(){
    if(tableBody.childElementCount == 0){
        toast.style=""
        table.style= "visibility: hidden;"
    }else{
        toast.style="visibility: hidden;"
        table.style= ""

    }
}
displaytoast()

function editPerson(event){
    console.log("enter");
/*     let temp = event.targetElement.id
    console.log(temp); */

}
let test = "adam"
function addToLocalStorage(element){

    localStorage.setItem("persons",JSON.stringify(element))
}
/* function getFromLocalStorage(){
    let persons = [] =JSON.parse(localStorage.getItem("persons")) 
    persons.
    addToLocalStorage(persons)
    console.log(persons);
    
} */
addToLocalStorage(test)
var i =0
function addNewPerson(){
    let person={
        fullname: `${input1.innerText}`,
        email: `${input2.value}`,
        age: `${input3.value}`,
        ID: `${input2.value}`*2,
    }

    console.log(person);
    i++;
}
document.querySelectorAll("tr").forEach(element=>element)