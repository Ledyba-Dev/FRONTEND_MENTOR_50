const template = document.getElementById("template")
let textBtn = null

const renderThankYou = (textBtn) => {
    const clone = template.content.cloneNode(true)
    const span = clone.querySelector("#score")
    const body = document.querySelector("body")
    body.innerHTML = ""
    span.textContent = `You selected ${textBtn} out of 5`
    body.appendChild(clone)
}


document.addEventListener("click", (evento) => {


    if (evento.target.matches(".btnNumber")) {
        const btns = document.querySelectorAll(".btnNumber")

        btns.forEach(btn => {
            btn.classList.remove("active")
        })

        evento.target.classList.add("active")
        textBtn = evento.target.textContent

    }

    if (evento.target.matches(".btnSubmit")) {

        if (textBtn) {
            renderThankYou(textBtn)
        }

    }

})