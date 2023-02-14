// template_p25xg1m
// service_lfax1oh
// Du2xJJi9-FYlClKsJ

function contact(e) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  e.preventDefault();
  emailjs
    .sendForm(
      "service_lfax1oh",
      "template_p25xg1m",
      e.target,
      "Du2xJJi9-FYlClKsJ"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The Email service is temporarily unavailable. My email is: yuanweicheng1@gmail.com"
      );
    });

  loading.classList += " modal__overlay--visible";
  setTimeout(() => {
    console.log("worked");
  }, 500);
}
