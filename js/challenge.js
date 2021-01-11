document.addEventListener("DOMContentLoaded", function() {
    counterIncrease()
});

// Counter and buttons
const counter = document.querySelector("#counter");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const pause = document.querySelector("#pause");
const heart = document.querySelector("#heart");
const commentForm = document.querySelector("#comment-form");
const comments = document.querySelector(".comments");
const submit = document.querySelector("#submit");

let pauseBtn = false;
let flag = false;
let timer = setInterval(counterIncrease, 1000);

// Event Listeners
plus.addEventListener("click", plusCounter);
minus.addEventListener("click", minusCounter);
pause.addEventListener("click", pauseAll);
heart.addEventListener("click", likesCounter);
submit.addEventListener("click", function(e){
    e.preventDefault();
    addComment();
});

// functions
function plusCounter() { // Hitting plus sign will increase the timer
    let counterInt = parseInt(counter.textContent)
    counterInt++
    counter.textContent = counterInt
}

function minusCounter() { // Hitting minus sign will decrease the timer
    let counterInt = parseInt(counter.textContent)
    counterInt--
    counter.textContent = counterInt
}

function likesCounter() {
    const likesContainer = document.querySelector(".likes")
    const li = document.createElement("li")
    li.setAttribute("id", counter.textContent)
    const exists = likesContainer.children.namedItem(`${counter.textContent}`)

    if(exists){
        exists.dataset.likes = parseInt(exists.dataset.likes) + 1;
        exists.textContent = `${exists.id} has been liked ${exists.dataset.likes}`;
    } else{
        li.dataset.likes = 1
        li.textContent = `${li.id} has been liked ${li.dataset.likes}`;
        likesContainer.append(li)
    }
}

function pauseAll() {
    if(plus.disabled == pauseBtn){
        plus.disabled = !pauseBtn
        minus.disabled = !pauseBtn
        heart.disabled = !pauseBtn
        flag = true
        pause.textContent = "resume"
    } else {
        plus.disabled = pauseBtn
        minus.disabled = pauseBtn
        heart.disabled = pauseBtn
        flag = false
        pause.textContent = "pause"
    }
}

function counterIncrease(){
    let counterInt = parseInt(counter.textContent);
    if(flag == false) {
        counterInt++
        counter.textContent = counterInt
    }
}

function addComment(){
    const p = document.createElement("p");
    p.textContent = commentForm.comment.value
    comments.append(p)
}