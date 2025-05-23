const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
    clearmassage();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailValidation()) {
        errorNodes[1].innerText = "Email is not valid";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "Message cannot be blank";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "successfully submitted";
    }
}

function clearmassage() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailValidation() {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email.value);    
}

// Mock additional projects data
const moreProjects = [];

let loaded = false;

document.getElementById('loadMoreBtn').addEventListener('click', function() {
    if (loaded) return;
    const container = document.getElementById('moreProjects');
    moreProjects.forEach((proj, idx) => {
        const div = document.createElement('div');
        div.className = 'parent'; // reuse grid styling
        div.innerHTML = `
            <div class="div1">
                <h4>${proj.title}
                    <p>${proj.description}</p>
                    <a href="${proj.link}" target="_blank">View project</a>
                </h4>
            </div>
        `;
        container.appendChild(div);
    });
    loaded = true;
    this.style.display = 'none'; // Hide button after loading
    document.getElementById('noMoreMsg').style.display = 'block'; // Show "no more projects" message
});

