const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");
const showAnswer = document.getElementById("showAnswer");
const answerText = document.getElementById("answerText");

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

    if(button.id==="showAnswer" || button.id==="closePopup")
        return;

    button.addEventListener("click",()=>{

        document.getElementById("questionTitle").innerText="100 Punkte";
        document.getElementById("questionText").innerText="Hier wird später automatisch die richtige Frage angezeigt.";

        answerText.innerText="";

        popup.classList.remove("hidden");

    });

});

showAnswer.onclick=()=>{

    answerText.innerText="Hier erscheint später automatisch die Antwort.";

}

closeBtn.onclick=()=>{

    popup.classList.add("hidden");

}
