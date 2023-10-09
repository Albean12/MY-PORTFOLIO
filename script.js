function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  if (!menu.classList.contains("open")) {
   
    menu.classList.add("open");
    icon.classList.add("open");
    
   
    document.body.addEventListener("click", closeMenuOnClickOutside);
  } else {

    menu.classList.remove("open");
    icon.classList.remove("open");
    
  
    document.body.removeEventListener("click", closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
 
  if (
    !menu.contains(event.target) &&
    !icon.contains(event.target)
  ) {
   
    menu.classList.remove("open");
    icon.classList.remove("open");
    
  
    document.body.removeEventListener("click", closeMenuOnClickOutside);
  }
}

