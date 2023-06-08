function animate() {
    var animation = document.querySelectorAll(".animate");
  
    for (var i = 0; i < animation.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = animation[i].getBoundingClientRect().top;
      var elementBottom = animation[i].getBoundingClientRect().bottom;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        animation[i].classList.add("active");
      } else {
        animation[i].classList.remove("active");
      }

      if (elementBottom < 100) {
        animation[i].classList.remove("active");

      }
    }
  }
  
  window.addEventListener("scroll", animate);
  window.addEventListener("mouseover", animate);
  window.addEventListener("mousemove", animate);