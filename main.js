document.getElementById("loginBtn").addEventListener("click", function () {
    let u = document.getElementById("username").value.trim();
    let p = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");

    msg.style.display = "block";

    if (u === "Snehal" || p === "Snehal@2005") {
        msg.textContent = "✅ Login Successfully! Welcome ";
        msg.style.background = "#f8d7da";
        msg.style.color = "Green";
    } else {
        msg.textContent = "❌ Please enter username & password " + u + "!";
        msg.style.background = "#d4edda";
        msg.style.color = "Red";
    }
});
