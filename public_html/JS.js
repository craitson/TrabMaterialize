$(document).ready(function () {
    $('.slider').slider({full_width: true});
});

$(document).ready(function () {
    $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

function valida() {
    var a = document.getElementById("nome").value;
    var b = document.getElementById("sobrenome").value;
    var c = document.getElementById("email").value;
    var d = document.getElementById("texto").value;
    var e = true;

    if (a == "") {
        alert("Favor preencher o Nome");
        e = false;
    }
    if (b == "") {
        alert("Favor preencher o Sobrenome");
        e = false;
    }
    if (c == "") {
        alert("Favor preencher o Email");
        e = false;
    }
    if (d == "") {
        alert("Favor preencher a Mensagem");
        e = false;
    }

    if (e == true) {
        alert("Sua mesangem foi enviada ao coordenador");
        document.getElementById("nome").value = "";
        document.getElementById("sobrenome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("texto").value = "";
    }
}

function minhaUnidavi() {

    $('#minhaUnidavi').openModal();
}

function validaUsuario() {
    var a = document.getElementById("user").value;
    var b = document.getElementById("pass").value;


    if (a == "" || b == "") {
        alert("Favor preencher os campos");

    }
    if (a == 1 && b == 1) {
        alert("Usuario e Senha autenticados com sucesso");
        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
        $('#minhaUnidavi').closeModal();
    } else {
        alert("Usuario e senha Errados");
    }
}


function sobre() {
    $('#sobre').openModal();
}

$(document).ready(function () {
    $('.parallax').parallax();
});
