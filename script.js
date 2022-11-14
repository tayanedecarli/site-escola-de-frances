'use strict';

$(".btn-menu").click(function(){
    $(".menu").show();
});
$(".btn-close").click(function(){
    $(".menu").hide();
});

function btnEnviar() {
    let name = document.getElementById('id-nome');
    alert(`${name.value}, seu recado for enviado com sucesso!`);
}
function btnCadastrar() {
    let email = document.getElementById('id-email');
    alert(`E-mail ${email.value} cadastrado com sucesso!`);

}
