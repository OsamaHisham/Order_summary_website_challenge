const navToggle = () => { 

  const lniksVisibility = document.querySelectorAll(".visibility");
  const inputState = document.getElementById("input-toggle");
  const navShape = document.querySelector(".hamburger");


  inputState.addEventListener('click', () => {

    // Function For showing and hiding the links + changing the hamburger icon shape
    if (inputState.checked == 1) {
      lniksVisibility.forEach((link) => {
        link.style.opacity = "1";
      });
      navShape.classList.toggle("toggle");
    } else {
      lniksVisibility.forEach((link) => {
        link.style.opacity = "0";
      });
      navShape.classList.toggle("toggle");
    }

  });

}

navToggle();




