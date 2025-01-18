document.addEventListener("DOMContentLoaded", () => {
    const signupButton = document.getElementById("signupButton");
    signupButton.addEventListener("click", () => {
      const email = document.getElementById("emailInput").value;
      const password = document.getElementById("passwordInput").value;
      if (email && password) {
        const user = { email, password };
        localStorage.setItem("user_" + email, JSON.stringify(user));
        alert("Account created successfully!");
        document.getElementById("signupForm").reset();
      } else {
        alert("Please fill out all fields!");
      }
    });
  });



  // CAR SWIPER STUFF FROM THEIR JS FILE
  const swiper = new Swiper('.slider-wrapper', {
  
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    //responsive breakpoints
    breakpoints:{
      0: {
      slidesPerView:1
    },

    620: {
      slidesPerView:2
    },
    1024: {
      slidesPerView:3
    },
    }

  });