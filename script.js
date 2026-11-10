function toggleMenu() {
 document.getElementById("menu").classList.toggle("active");
}
function closeMenu() {
 document.getElementById("menu").classList.remove("active");
}
function calculate() {
 const quantity = Number(document.getElementById("quantity").value);
 const priceInput = document.getElementById("price").value;
 const price = Number(priceInput);
 const result = document.getElementById("result");
 if (!Number.isInteger(quantity) || quantity <= 0 || priceInput === "" || !Number.isFinite(price) || price < 0) {
  result.textContent = "Введите корректные значения!";
  return;
 }
 const total = quantity * price;
 result.textContent = "Итого: " + total.toLocaleString("ru-RU") + " ₽";
}
const slides = [
 {image:"https://i.pinimg.com/1200x/c6/67/95/c667958d2a764272b7d83a9326d8394a.jpg",caption:"Гармония оттенков"},
 {image:"https://i.pinimg.com/736x/98/ec/07/98ec078799dafc3a7f5593c4349eb7b8.jpg",caption:"Мягкие фактуры"},
 {image:"https://i.pinimg.com/1200x/35/12/19/3512192d9ea5759d27b19948f55d6fe4.jpg",caption:"Натуральные материалы"}
];
let currentSlide = 0;
function changeSlide(direction) {
 currentSlide += direction;
 if (currentSlide >= slides.length) currentSlide = 0;
 if (currentSlide < 0) currentSlide = slides.length - 1;
 document.getElementById("slideImage").src = slides[currentSlide].image;
 document.getElementById("slideCaption").textContent = slides[currentSlide].caption;
}
const questions = document.querySelectorAll(".accordion-question");
questions.forEach(question => {
 question.addEventListener("click", () => {
  const currentItem = question.parentElement;
  document.querySelectorAll(".accordion-item").forEach(item => {
   if (item !== currentItem) item.classList.remove("active");
  });
  currentItem.classList.toggle("active");
 });
});
function sendForm(event) {
 event.preventDefault();
 const name = document.getElementById("name").value;
 const message = document.getElementById("formMessage");
 message.textContent = "Спасибо, " + name + "! Ваша заявка успешно заполнена.";
 message.style.color = "#70594f";
 document.querySelector(".contact-form").reset();
}
