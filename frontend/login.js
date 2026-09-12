const loginForm = document.querySelector("#loginForm");
const message = document.querySelector("#message");

loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;

    try {
        const response = await axios.post(
            "https://simon-says-backend-02wf.onrender.com/api/login",
            {
                email: email,
                password: password
            }
        );

        message.innerText = response.data.message;

        localStorage.setItem("username", response.data.username);
        localStorage.setItem("token", response.data.token);

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