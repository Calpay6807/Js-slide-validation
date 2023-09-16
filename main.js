let cars = [
  {
    carName: "mercedes",
    image: "images/car-967470_640.png",
    model: "Model 2023",
  },
  {
    carName: "bmw",
    image: "images/car-49278_640.jpg",
    model: "Model 2023",
  },
  {
    carName: "toyotta",
    image: "images/car-5749737_640.png",
    model: "Model 2023",
  },
  {
    carName: "opel",
    image: "images/png-car-3031752_640.png",
    model: "Model 2023",
  },
  {
    carName: "audi",
    image: "images/png-car-3031752_640.png",
    model: "Model 2023",
  },
];

const names = document.querySelector(".cart-title");
const images = document.querySelector(".image-top");
const rightBtn = document.querySelector(".bi-arrow-right-circle-fill");
const leftBtn = document.querySelector(".bi-arrow-left-circle-fill");
const model = document.querySelector(".model");
const listMenu = document.querySelector("#link");
const showMenu = document.querySelector(".active");
const nav = document.querySelector("nav");
const addToCartButtons = document.querySelectorAll(".add-card");
const cartCount = document.getElementById("cartCount");
const counter = document.querySelector(".counter");
const signUp = document.querySelector(".sign");
//form işlemleri
const form = document.getElementById("form");
const email = document.getElementById("email");
const surname = document.getElementById("surname");

let index = 0;
let sliderCount = cars.length;
let settings = {
  duration: "2000",
  random: true,
};
init(settings);

// sağ buton için clik eventi
rightBtn.addEventListener("click", () => {
  index--;
  //değerleri gönderme
  showSlide(index);
  console.log(index);
});

//sol buton için clık eventi
leftBtn.addEventListener("click", () => {
  index++;
  showSlide(index);
  console.log(index);
});

function init(settings) {
  // setTimeout
  // ikisinini farkı set timeaaout 2 sn çalışır durur  ama
  //setınterval sürekli devam eder clearınterval ile durdurmaz isek

  setInterval(function () {
    if (settings.random) {
      //random index
      index = Math.floor(Math.random() * sliderCount);
    } else {
      //artan index
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  //eksiye düşünce slaytı başa alma
  if (i < 0) {
    index = sliderCount - 1;
  }
  if (i > sliderCount) {
    index = 0;
  }

  //rsim değişikliği
  images.setAttribute("src", cars[index].image);

  //isim değişikliği
  names.textContent = cars[index].carName;
  model.textContent = cars[index].model;
}

listMenu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("toggle");
});

// Sepet miktarını seçin

let itemCount = 0;

// Sepete Ekle düğmelerine tıklama olayı ekleyin
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Sepet miktarını artırın ve güncelleyin
    itemCount++;
    cartCount.textContent = itemCount;
  });
});

const formArea = document.querySelector(".form");
let formVisible = false;

signUp.addEventListener("click", (e) => {
  e.preventDefault();
  if (formVisible) {
    formArea.style.display = "none"; // Form alanını gizle
  } else {
    formArea.style.display = "block"; // Form alanını görünür yap
  }

  formVisible = !formVisible;
});

const closeButton = document.getElementById("closeButton");

// "X" düğmesine tıklanınca çalışacak işlevi tanımlayın
closeButton.addEventListener("click", function () {
  // Formu gizlemek veya kapatmak için gereken kodu buraya ekleyin
  const formSection = document.querySelector(".form");
  formSection.style.display = "none"; // Formu gizlemek için display stilini "none" yapabilirsiniz
});

function error(input) {
  input.className = "error";
}
function success(input) {
  input.className = "success";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function checkRquired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input);
    } else {
      success(input);
    }
  });
}

// Form işlemleri
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRquired([email, surname]);

  // kısa hali

  // uzun hali
  // if (email.value === "") {
  //   error(email);
  // } else if (validateEmail(email)) {
  //   error(email, "düzgün bir mail giriniz");
  // } else {
  //   success(email);
  // }
  // if (surname.value === "") {
  //   error(surname);
  // } else {
  //   success(surname);
  // }
  // if (parola.value === "") {
  //   error(parola);
  // } else {
  //   success(parola);
  // }
  // if (reparola.value === "") {
  //   error(reparola);
  // } else {
  //   success(reparola);
  // }
});
