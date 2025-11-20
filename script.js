
/* Linking Objects */


const addModal = document.getElementById("addModal");
const closeModalBtn = document.getElementById("closeModalBtn1");
const profileModal = document.getElementById("profileModal");
const form = document.forms["ajoute"]




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
    let workersList = JSON.parse(localStorage.getItem("workersList")) || []
    return workersList;
}

const workersListSection = document.getElementById("workersListSection")

function updateWorkersSection() {
    let workersList = getFromLocalStorage()
    workersListSection.innerHTML = ""
    workersList.forEach(worker =>
        workersListSection.innerHTML +=
        `<div class="workerCard hover:animate-bounce bg-[#A4BCC6] border-2 border-[#1E1E1E] rounded-md flex lg:flex-row flex-col justify-between p-1 cursor-pointer">
                <div class="flex lg:flex-row flex-col gap-2">
                    <div class="bg-[url(img/PFP.webp)] bg-cover border-2 border-[#1E1E1E] rounded-sm size-12"></div>
                    <div class="flex flex-col">
                        <small class="font-bold">${worker.fullname}</small>
                        <small>${worker.role}</small>
                    </div>
                </div>
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

            let expBlock = document.getElementById("expBlock")
            expBlock.innerHTML = ""
            
            if(profile.experience.length === 0){
                expBlock.innerHTML+= "<h3>No experience</h3>"
            }else{
                profile.experience.forEach(xp=>{
                    expBlock.innerHTML+= `<h3>-${xp}</h3>`
                })
            }
            
            

            profileModal.classList.replace("hidden", "block");
        })
        );

}
const profileInfoBlock = document.getElementById("profileInfoBlock");
/* AddWorker */
form.addEventListener("submit", (e) => {
    
    e.preventDefault()
    formValidation()
});

let i = 0;
/* form validation */
function formValidation() {
    
    const fullNameV = form.fullName.value
    const numberV = form.number.value
    const emailV = form.email.value

    const result1 = /^[a-z\s]+$/i.test(fullNameV)
    const result2= /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g.test(numberV)
    const result3= /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(emailV)

    if(result1){
        inputCorrect(form.fullName)
    }else{
        inputError(form.fullName)
    }
    
    if (result2) {
        inputCorrect(form.number)
    }else{
        inputError(form.number)
    }

    if (result3) {
        inputCorrect(form.email)
    }else{
        inputError(form.email)
    }

    if(result1&&result2&&result3){
        addNewWorker()
    }
}

function inputError(input){
    input.style.border= "2px solid #8e2a18";
}
function inputCorrect(input){
    input.style.border= "2px solid #68A17B";
}

/* add New Worker */

function addNewWorker() {
    let workersList = getFromLocalStorage() 
    let person = {
        id: i,
        fullname: form.fullName.value,
        role: form.role.value,
        number: form.number.value,
        email: form.email.value,
        experience: [],
    }

    
    if(form.experiences instanceof NodeList){
        console.log("enter condition");
        form.experiences.forEach(xp => {
            person.experience.push(xp.value)
        })
    }else{
        person.experience.push(form.experiences.value) 
    }
    i++;

    document.querySelectorAll("input").forEach(input => input.value = "")
    document.getElementById("expDiv").innerHTML =
        `<label for="experience">Experience</label>
        <input name="experiences" type="text" placeholder="Experience" class="forumInput bg-[#8EA1B8] p-2 border-[#1e1e1e] border-2 rounded-sm">`
    workersList.push(person);
    addToLocalStorage(workersList)

}

document.getElementById("addExperienceBtn").addEventListener("click", addExp)

function addExp() {
    document.getElementById("expDiv").innerHTML +=
        `<input  name="experiences" type="text" placeholder="Experience" class="forumInput bg-[#8EA1B8] p-2 border-[#1e1e1e] border-2 rounded-sm">`


}

const displayWorkersModalBtn = document.querySelectorAll(".displayWorkersModal")
    .forEach(element => element.addEventListener("click", displayWorkersModalContent))
const workersModal = document.getElementById("workersModal")
const workersDisplayBlock = document.getElementById("workersDisplayBlock")

function displayWorkersModalContent() {
    console.log("enter");

    let workersList = getFromLocalStorage()
    workersDisplayBlock.innerHTML = ""
    workersList.forEach(worker =>
        workersDisplayBlock.innerHTML +=
        `<div class="smallWorkerCard hover:animate-bounce bg-[#A4BCC6] border-2 border-[#1E1E1E] rounded-md flex lg:flex-row flex-col justify-between p-1 cursor-pointer">
            <div class="flex lg:flex-row flex-col gap-2">
                <div class="bg-[url(img/PFP.webp)] bg-cover border-2 border-[#1E1E1E] rounded-sm size-12"></div>
                <div class="flex flex-col">
                    <small class="font-bold">${worker.fullname}</small>
                    <small>${worker.role}</small>
                </div>
            </div>
        </div>`
        )
    displayWorkersModalDisplay()
}

function displayWorkersModalDisplay() {
    workersModal.classList.replace("hidden", "block")
}


function addToZone(){

}