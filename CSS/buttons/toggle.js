document.addEventListener("click", event => {
    const button = event.target.closest(".daxcr-toggle");
    if (!button) return;
    if (!button.classList.contains("daxcr-disabled")) {
        button.classList.toggle("toggled");
    }
});