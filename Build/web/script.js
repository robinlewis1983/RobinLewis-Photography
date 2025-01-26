// document.addEventListener('click', e =>{
//     const isDropdonwButton = e.target.matches("[data-dropdown-button]")
//     if (!isDropdonwButton && e.target.closest('[data-dropdown]') != null) return

//     let currentDropdown
//     if (isDropdonwButton){
//         currentDropdown = e.target.closest('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//     }
    
//     Document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if(dropdown == currentDropdown) return
//         dropdown.classlist.remove('active')
//     })
// })

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    });
});