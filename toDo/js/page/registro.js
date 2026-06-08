function initRegistro() {
    let btnLogin = document.querySelector("#btnLogin");
    let btnRegistrar = document.querySelector("#btnRegistrarse");
    btnLogin.addEventListener("click", irLogin);
    btnRegistrar.addEventListener("click",registro);
}

function irLogin() {
    irA("view-login",initLogin);
}

function registro() {
    let user= document.querySelector("#txtUser").value;
    let pass= document.querySelector("#txtPass").value;
    let nombre= document.querySelector("#txtNombre").value;
    let registro = miApp.registrarUsuario(nombre,user,pass);
    let p = document.querySelector("#alert");
    if(registro){
        irA("view-login", initLogin);
    } else {
        p.innerHTML= "Datos incorrectos";
    }
}