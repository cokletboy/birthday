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
