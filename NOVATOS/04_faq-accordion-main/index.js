document.addEventListener("click", (event) => {

    if (event.target.closest(".accordionTitle")) {

        const button = event.target.closest(".accordionTitle");
        const accodionItem = button.parentElement;
        const accordionContent = accodionItem.querySelector(".accordionContent");

        const iconPlus = button.querySelector(".iconPlus");
        const iconMinus = button.querySelector(".iconMinus");


        // ALTERNAR CLASE PARA MOSTRAR EL ACORDEON
        accordionContent.classList.toggle("showAccordion");
        iconPlus.classList.toggle("hidden");
        iconMinus.classList.toggle("hidden");
    }


});


