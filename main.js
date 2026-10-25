function login(){
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  if(u === "admin" && p === "1234"){
    msg.innerHTML = "✅ Login Successfully! Welcome!";
    msg.style.color = "white";
    msg.style.background = "linear-gradient(90deg, #00b09b, #96c93d)";
    msg.style.padding = "12px";
    msg.style.borderRadius = "10px";
  }else{
    msg.innerHTML = "❌ Wrong Username or Password";
    msg.style.color = "white";
    msg.style.background = "#ff4757";
    msg.style.padding = "10px";
    msg.style.borderRadius = "10px";
  }
}
