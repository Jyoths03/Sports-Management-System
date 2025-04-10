function toggleDropdown(element) {
    var submenu = element.nextElementSibling;
    var parentLi = element.parentElement; // Get the parent <li>

    // Toggle display of the submenu
    submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "block" : "none";

    // Toggle active class on the parent <li>
    parentLi.classList.toggle('active');
}

