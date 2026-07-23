// Wait until page loads

document.addEventListener("DOMContentLoaded", () => {

    console.log("Certificate Verification Loaded");

    // Create Action Buttons

    const footer = document.querySelector(".footer");

    const buttonContainer = document.createElement("div");

    buttonContainer.className = "button-container";

    buttonContainer.innerHTML = `

        <button id="copyBtn">Copy Certificate ID</button>

        <button id="printBtn">Print Page</button>

    `;

    footer.before(buttonContainer);

    // Verification Time

    const verifyTime = document.createElement("p");

    verifyTime.className = "verify-time";

    verifyTime.innerHTML =
        "<strong>Verified On:</strong> " +
        new Date().toLocaleString();

    footer.before(verifyTime);

    // Copy Certificate ID

    document.getElementById("copyBtn").addEventListener("click", () => {

        navigator.clipboard.writeText("DA4A02F49F1B852G");

        showToast("Certificate ID Copied");

    });

    // Print

    document.getElementById("printBtn").addEventListener("click", () => {

        window.print();

    });

});

// Toast Notification

function showToast(message){

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },2500);

}