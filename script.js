const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("🚧 Diese Frage kommt im nächsten Schritt!");

        button.disabled = true;
        button.style.background = "#222";
        button.style.color = "#666";

    });

});
