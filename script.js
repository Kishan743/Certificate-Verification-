// ==============================
// Current Verification Time
// ==============================

const time = document.getElementById("time");

const now = new Date();

time.innerHTML = now.toLocaleString("en-IN",{
    dateStyle:"full",
    timeStyle:"medium"
});


// ==============================
// Copy Certificate ID
// ==============================

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click",()=>{

    const certificateID="DA4A02F49F1B852G";

    navigator.clipboard.writeText(certificateID);

    showToast("Certificate ID Copied Successfully");

});


// ==============================
// Toast Notification
// ==============================

function showToast(message){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerHTML=`
        <i class="fa-solid fa-circle-check"></i>
        ${message}
    `;

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



// ==============================
// Fade Animation
// ==============================

window.addEventListener("load",()=>{

    document.querySelector(".container").style.opacity="0";

    document.querySelector(".container").style.transform="translateY(40px)";

    setTimeout(()=>{

        document.querySelector(".container").style.transition=".7s";

        document.querySelector(".container").style.opacity="1";

        document.querySelector(".container").style.transform="translateY(0px)";

    },100);

});



// ==============================
// Print Page
// ==============================

window.onbeforeprint=function(){

    document.title="Certificate Verification";

}



// ==============================
// Card Hover Effect
// ==============================

document.querySelectorAll(".info-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-4px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});



// ==============================
// Status Animation
// ==============================

const verified=document.querySelector(".verified");

setInterval(()=>{

    verified.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.05)"},

        {transform:"scale(1)"}

    ],{

        duration:1200

    });

},3500);




// ==============================
// Scroll Reveal
// ==============================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});




// ==============================
// Console Message
// ==============================

console.log("%cCertificate Verified","color:green;font-size:20px;font-weight:bold;");

console.log("Developed by Kishan 🚀");