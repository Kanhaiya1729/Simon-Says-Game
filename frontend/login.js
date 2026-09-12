const loginForm = document.querySelector("#loginForm");
const message = document.querySelector("#message");

loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;

    try {
        const response = await axios.post(
            "http://localhost:3000/api/login",
            {
                email: email,
                password: password
            }
        );

        message.innerText = response.data.message;

        localStorage.setItem("username", response.data.username);

        setTimeout(function () {
            window.location.href = "index.html";
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