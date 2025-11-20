
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
    localStorage.setItem("workersList", JSON.stringify(list));
    updateWorkersSection();
}
function getFromLocalStorage() {
    let workersList = JSON.parse(localStorage.getItem("workersList"))
    return workersList;
}

const workersListSection = document.getElementById("workersListSection")

function updateWorkersSection() {
    let workersList = getFromLocalStorage()
    workersListSection.innerHTML = ""
    workersList.forEach(worker =>
        workersListSection.innerHTML +=
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
        .forEach((element) => element.addEventListener("click", () => {
            let filter = element.querySelector("small").innerHTML
            let profile = workersList.find(o => o.fullname === filter);
            profileInfoBlock.innerHTML = ""
            profileInfoBlock.innerHTML +=
                `<div class="flex gap-16">
                        <div class="flex flex-col">
                            <label class="font-bold" for="fullName">FullName:</label>
                            <h3 id="PMfullname">${profile.fullname}</h3> 
                        </div>
                        <div class="flex flex-col">
                            <label class="font-bold" for="role">Role:</label>
                            <h3 id="PMrole">${profile.role}</h3>
                        </div>
                    </div>
                    <div>
                        <label class="font-bold" for="number">Phone Number:</label>
                        <h3 id="PMnumber">${profile.number}</h3>
                    </div>
                    <div>
                        <label class="font-bold" for="email">Email</label>
                        <h3 id="PMemail">${profile.email}</h3>
                    </div>`

            let Plength = profile.experience.length
            console.log(Plength);

            let expBlock = document.getElementById("expBlock")
            expBlock.innerHTML = ""
            expBlock.innerHTML += "<h2 class='font-bold'>Experience</h2>"
            for (let i = 0; i < Plength; i++) {
                console.log("enter");

                expBlock.innerHTML += `<h3>test</h3>`
            }
            profileModal.classList.replace("hidden", "block");
        })
        );

}
const profileInfoBlock = document.getElementById("profileInfoBlock");
/* AddWorker */
document.getElementById("addBtn").addEventListener("submit", (e) => {
    console.log("enter");
    
    e.preventDefault()
    formValidation()
});
let i = 0;
/* form validation */
function formValidation() {
    console.log("enter");
    
    const fullNameV = form.fullName.value
    const numberV = form.number.value
    const emailV = form.email.value

    const result1 = fullNameV.test(/[^a-z\s]+/gi)
    if(resul == 1){
        inputCorrect(form.fullName)
    }else{
        inputError(form.fullName)
    }
    
    const result2= numberV.test(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g)
    if (result2 == 1) {
        inputCorrect(form.number)
    }else{
        inputError(form.number)
    }
    const result3= emailV.test(/^[\w-.]+@([\w-]+.)+[\w-]{2,}$/gm)
    if (result3 == 1) {
        inputCorrect(form.email)
    }else{
        inputError(form.email)
    }

    if(result1&&result2&&result3==1){
        addNewWorker()
    }else{
        console.log("error in form");
        
    }
}
function inputError(input){
    input.style.border= "2px solid #8e2a18";
}
function inputCorrect(input){
    input.style.border= "2px solid #68A17B";
}

/* add New Worker */
let form = document.forms["ajoute"]

function addNewWorker() {
    let workersList = getFromLocalStorage() || []
    let person = {
        id: i,
        fullname: form.fullName.value,
        role: form.role.value,
        number: form.number.value,
        email: form.email.value,
        experience: [],
    }


    for (let i = 0; i < form.experiences.length; i++) {
        person.experience.push(form.experiences[i].value)
    }
    i++;

    document.querySelectorAll("input").forEach(input => input.value = "")

    workersList.push(person);
    addToLocalStorage(workersList)

}

document.getElementById("addExperienceBtn").addEventListener("click", addExp)

function addExp() {
    document.getElementById("expDiv").innerHTML +=
        `<input id="experience" name="experiences" type="text" placeholder="Experience" class="forumInput bg-[#8EA1B8] p-2 border-[#1e1e1e] border-2 rounded-sm">`


}

const displayWorkersModalBtn = document.querySelectorAll(".displayWorkersModal")
    .forEach(element => element.addEventListener("click", displayWorkersModalContent))
const displayWorkersModal = document.getElementById("displayWorkersModal")
const workersDisplayBlock = document.getElementById("workersDisplayBlock")

function displayWorkersModalContent() {
    console.log("enter");

    let workersList = getFromLocalStorage()
    workersDisplayBlock.innerHTML = ""
    workersList.forEach(worker =>
        workersDisplayBlock.innerHTML +=
        `<div class="workerCard bg-[#A4BCC6] border-2 border-[#1E1E1E] rounded-md flex justify-between gap-2 p-1 cursor-pointer">
                <div class="flex gap-2">
                    <div class="bg-[#FAFCEE] border-2 border-[#1E1E1E] rounded-sm size-12"></div>
                    <div class="flex flex-col">
                        <small>${worker.fullname}</small>
                        <small>${worker.role}</small>
                    </div>
                </div>
                <button  class="addToBoardBtn hover:bg-[#8EA1B8] cursor-pointer rounded-sm"><i class="fa-regular fa-square-plus" style="color: #1e1e1e;"></i></button>
            </div>`)
    displayWorkersModalDisplay()
}

function displayWorkersModalDisplay() {
    displayWorkersModal.classList.replace("hidden", "block")
}
