
const select = document.getElementById("select");
let classToSelect = document.getElementsByClassName("toSelect")
const container = document.querySelector(".container")
select.addEventListener("change", () => {
    let isSelected = Array.from(classToSelect).every(e => e.checked)

    if (isSelected) {
        Array.from(classToSelect).forEach(e => { e.checked = false })
    }
    else {
        Array.from(classToSelect).forEach(e => { e.checked = true })
    }
})

container.addEventListener("click", (e) => {
    let isSelected = Array.from(classToSelect).every(e => e.checked)
    if (isSelected) {
        select.checked = true
    }
    else {
        select.checked = false
    }
})