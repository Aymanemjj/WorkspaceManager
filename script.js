
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
    updateWorkersSection();
}
function getFromLocalStorage(){
    let workersList = JSON.parse (localStorage.getItem("workersList"))
    return workersList;
}

const workersListSection= document.getElementById("workersListSection") 

function updateWorkersSection() { 
    let workersList = getFromLocalStorage()
    workersListSection.innerHTML=""
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
    
document
    .querySelectorAll(".workerCard")
    .forEach((element) => element.addEventListener("click", ()=>{
        let filter = element.querySelector("small").innerHTML
        let profile = workersList.find(o => o.fullname === filter);
        profileInfoBlock.innerHTML = ""
        profileInfoBlock.innerHTML+=
                    `<div class="flex gap-16">
                        <div class="flex flex-col">
                            <label for="fullName">FullName:</label>
                            <h3 id="PMfullname">${profile.fullname}</h3> 
                        </div>
                        <div class="flex flex-col">
                            <label for="role">Role:</label>
                            <h3 id="PMrole">${profile.role}</h3>
                        </div>
                    </div>
                    <div>
                        <label for="number">Phone Number:</label>
                        <h3 id="PMnumber">${profile.number}</h3>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <h3 id="PMemail">${profile.email}</h3>
                    </div>
                    <div id="expBlock">
                        <label for="experience">Experience</label>
                        <h3 id="PMexperience">${profile.experience}</h3>
                    </div>`
        profileModal.classList.replace("hidden", "block");
    })
);

}
const profileInfoBlock = document.getElementById("profileInfoBlock");
/* AddWorker */
document.getElementById("addBtn").addEventListener("click",addNewWorker);
let i = 0;
function forumVerification(){
    
}
function addNewWorker(){    
    let workersList = getFromLocalStorage() || []

    let person={
        id: i,
        fullname: `${document.getElementById("fullname").value}`,
        role: `${document.getElementById("role").value}`,
        number: `${document.getElementById("number").value}`,
        email: `${document.getElementById("email").value}`,
        experience: `${document.getElementById("experience").value}`,
    }
    i++;

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

