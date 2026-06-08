function initLogin() {
    let btnLogin = document.querySelector("#btnLogin");
    let btnRegistrar = document.querySelector("#btnRegistro");
    btnLogin.addEventListener("click",login);
    btnRegistrar.addEventListener("click",irRegistro);
}

function login() {
    let user= document.querySelector("#txtUser").value;
    let pass= document.querySelector("#txtPass").value;
    let login = miApp.login(user,pass);
    let p = document.querySelector("#alert");
    if(login){
        p.innerHTML= "Exito";
    }else{
        p.innerHTML= "Usuario / Contrasenna incorrectos";
    }
}

function irRegistro() {
    irA("view-registro", initRegistro);
}