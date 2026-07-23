const certificateID = "DA4A02F49F1B852G";

const timeElement = document.getElementById("time");
const copyButton = document.getElementById("copyBtn");

function updateTime() {
    const now = new Date();

    timeElement.textContent = now.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "medium"
    });
}

updateTime();

copyButton.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(certificateID);

        showToast("Certificate ID copied successfully");

    } catch {

        showToast("Unable to copy Certificate ID");

    }

});

function showToast(message) {

    const existing = document.querySelector(".toast");

    if (existing) {
        existing.remove();
    }

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2000);

}