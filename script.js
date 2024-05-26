
function show(e){
    e.preventDefault();
    const Name=document.getElementById("fullName");
    const email=document.getElementById("Email");
    const password=document.getElementById("pwd");
    const phone=document.getElementById("phn");
    document.getElementById("userName").innerText=`${Name.value}`;
    document.getElementById("userEmail").innerText=`${email.value}`;
    document.getElementById("userPassword").innerText=`${password.value}`;
    document.getElementById("userPhone").innerText=`${phone.value}`;
    document.getElementById("container").style.display="none";
    document.getElementById("card").style.display="flex";
  
}