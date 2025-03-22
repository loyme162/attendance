const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const usernameInput = document.getElementById("username");
const userInfo = document.getElementById("userInfo");

// Check if user is already logged in
const user = localStorage.getItem("user");
if (user) {
    markAttendance(user);
}

// Login Function
loginBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem("user", username);
        markAttendance(username);
    } else {
        alert("Please enter your name.");
    }
});

// Logout Function
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    userInfo.innerHTML = "";
    usernameInput.style.display = "block";
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
});

// Mark Attendance
function markAttendance(username) {
    const date = new Date().toLocaleDateString();
    localStorage.setItem("lastLogin", date);

    userInfo.innerHTML = `<h2>Welcome, ${username}</h2><p>Last login: ${date}</p>`;
    usernameInput.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
}
