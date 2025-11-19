
/* Linking Objects */
    

const addModal = document.getElementById("addModal");
const closeModalBtn = document.getElementById("closeModalBtn1");
const profileModal = document.getElementById("profileModal");




/* Modal controlls */
document.getElementById("addWorkerBtn").addEventListener("click", openModal1);

function openModal1() {
    addModal.classList.replace("hidden", "block");
}

document
    .querySelectorAll(".workerCard")
    .forEach((element) => element.addEventListener("click", openModal2));

function openModal2(element) {
    console.log("enter");
    let filter = element.querySelector("small").innerHTML

    profileModal.classList.replace("hidden", "block");
}

document
    .querySelectorAll(".closeModalBtn")
    .forEach((element) => element.addEventListener("click", closeModal));


function closeModal(event) {
    let temp =
        event.currentTarget.parentElement.parentElement.parentElement.parentElement;
    temp.classList.replace("block", "hidden");
}

/* LocalStorage */
function addToLocalStorage(list) {
    localStorage.setItem("workersList",JSON.stringify(list));
    laodLocalStorage()
}
const workersListSection= document.getElementById("workersListSection") 

function laodLocalStorage(){
    let workersList =JSON.parse (localStorage.getItem("workersList"))
    return workersList; 
}

function updateWorkersSection() { 
    let workersList = laodLocalStorage()
    workersList.forEach(worker =>
        workersListSection.innerHTML+=
            `<div class="workerCard bg-[#A4BCC6] border-2 border-[#1E1E1E] rounded-md flex justify-between gap-2 p-1 cursor-pointer">
                    <div class="flex gap-2">
                        <div class="bg-[#FAFCEE] border-2 border-[#1E1E1E] rounded-sm size-12"></div>
                        <div class="flex flex-col">
                            <small>${worker.fullname}</small>
                            <small>${worker.role}</small>
                        </div>
                    </div>
                    <button  class="addToBoardBtn hover:bg-[#8EA1B8] cursor-pointer rounded-sm"><i class="fa-regular fa-square-plus" style="color: #1e1e1e;"></i></button>
                </div>`
        
    )
    
}

/* AddWorker */
document.getElementById("addBtn").addEventListener("click",addNewWorker);

function addNewWorker(){    
    let workersList = laodLocalStorage()

    let person={
        id: `${document.getElementById("number").value}`*2,
        fullname: `${document.getElementById("fullname").value}`,
        role: `${document.getElementById("role").value}`,
        number: `${document.getElementById("number").value}`,
        email: `${document.getElementById("email").value}`,
        experience: `${document.getElementById("experience").value}`,
    }
    document.querySelectorAll("input").forEach(input=> input.value="")

    workersList.push(person);
    addToLocalStorage(workersList)
    
}
document.getElementById("addExperienceBtn").addEventListener("click",addExp)
function addExp(){
    console.log("enter");
    
    document.getElementById("expDiv").innerHTML+=
        '<input id="experience" type="text" placeholder="Experience" class="forumInput bg-[#8EA1B8] p-2 border-[#1e1e1e] border-2 rounded-sm">'

}
    updateWorkersSection();
