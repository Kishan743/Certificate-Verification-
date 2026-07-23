document.addEventListener("DOMContentLoaded", () => {

    // Live verification time
    const timeElement = document.getElementById("time");

    if (timeElement) {
        const now = new Date();

        timeElement.textContent = now.toLocaleString("en-IN", {
            dateStyle: "full",
            timeStyle: "medium"
        });
    }

    // Copy Certificate ID
    const copyBtn = document.getElementById("copyBtn");
    const certificateId = "DA4A02F49F1B852G";

    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {

            try {
                await navigator.clipboard.writeText(certificateId);

                const originalHTML = copyBtn.innerHTML;

                copyBtn.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    Copied!
                `;

                copyBtn.disabled = true;

                setTimeout(() => {
                    copyBtn.innerHTML = originalHTML;
                    copyBtn.disabled = false;
                }, 1800);

            } catch (err) {
                alert("Unable to copy Certificate ID.");
            }

        });
    }

});