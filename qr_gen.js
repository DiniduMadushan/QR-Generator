document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector(".wrapper");
    const header = wrapper.querySelector(".header h1");
    const qrInput = wrapper.querySelector(".form input");
    const generateBtn = wrapper.querySelector(".form button");
    const qrImg = wrapper.querySelector(".qr-code img");
    const print_btn=wrapper.querySelector(".print-btn");
    let preValue;

    const generateQRCode = async () => {
        const qrValue = qrInput.value.trim();
        if (!qrValue || preValue === qrValue) return;
        preValue = qrValue;
        generateBtn.innerText = "Please wait...";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

        qrImg.onload = () => {
            wrapper.classList.add("active");
            generateBtn.innerText = "QR Code Successfully Generated !";
            generateBtn.classList.add("loaded");
            print_btn.classList.add("visible");
            qrInput.classList.add("invisible");
            header.classList.add("invisible");
            
        };
    };

    generateBtn.addEventListener("click", generateQRCode);

    qrInput.addEventListener("keyup", () => {
        if (!qrInput.value.trim()) {
            wrapper.classList.remove("active");
            preValue = "";
        }
    });
});