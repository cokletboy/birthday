const text = `শুভ জন্মদিন, আমার সবচেয়ে প্রিয় মানুষ। ❤️

তুই শুধু আমার বেস্ট ফ্রেন্ড না, আমার জীবনের সবচেয়ে সুন্দর অনুভূতিগুলোর একটা।

আজকের দিনটা তোর জীবনে অনেক আনন্দ, ভালোবাসা আর সফলতা নিয়ে আসুক।

💖 সবসময় এভাবেই হাসিখুশি থাকিস।`;

let i = 0;

const message = document.querySelector(".message");

message.innerHTML = "";

function type() {
    if (i < text.length) {
        message.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 40);
    }
}

type();
/* ===== Photo Slider ===== */
const photos = document.querySelectorAll(".slider .photo");
let current = 0;

setInterval(() => {
    photos[current].classList.remove("active");
    current = (current + 1) % photos.length;
    photos[current].classList.add("active");
}, 3000);

/* ===== Floating Hearts ===== */
const hearts = document.getElementById("hearts");

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}, 500);
