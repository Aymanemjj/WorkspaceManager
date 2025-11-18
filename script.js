document.getElementById("addWorkerBtn").addEventListener("click", openModal1);
document
    .querySelectorAll(".workerCard")
    .forEach((element) => element.addEventListener("click", openModal2));
    
document
    .querySelectorAll(".closeModalBtn")
    .forEach((element) => element.addEventListener("click", closeModal));

const addModal = document.getElementById("addModal");

const closeModalBtn = document.getElementById("closeModalBtn1");

const profileModal = document.getElementById("profileModal");






function openModal1() {
    addModal.classList.replace("hidden", "block");
}

function openModal2() {
    console.log("enter");

    profileModal.classList.replace("hidden", "block");
}

function closeModal(event) {
    let temp =
        event.currentTarget.parentElement.parentElement.parentElement.parentElement;
    temp.classList.replace("block", "hidden");
}

function addToLocalStorage() {
    workersList = [];
    localStorage.setItem("workersList",JSON.stringify(workersList));
    updateWorkersSection();
}

function updateWorkersSection() { 

}

function addNewWorker(){
    let worker = new Object()

    addModal.querySelectorAll(".forumInput").forEach(element => worker.[`${element.id`])
    
}
