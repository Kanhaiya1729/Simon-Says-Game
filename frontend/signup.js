
const signupForm = document.querySelector("#signupForm");
const message = document.querySelector("#message");

signupForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match!";
        return;
    }

    if (password.length < 6) {
        message.innerText = "Password must be at least 6 characters.";
        return;
    }

    try {

        const response = await axios.post(
            "http://localhost:3000/singup/api/signup",
            {
                username: username,
                email: email,
                password: password
            }
        );

        message.innerText = response.data.message;

        signupForm.reset();

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);

    } catch (error) {

        console.log(error);

        if (error.response) {
            message.innerText = error.response.data.message;
        } else {
            message.innerText = "Server error. Please try again.";
        }
    }
});