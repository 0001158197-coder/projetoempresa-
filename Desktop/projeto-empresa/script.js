// BOAS-VINDAS
window.addEventListener("load", () => {
alert("Bem-vindo ao site!");
});

// DARK MODE
document.getElementById("darkMode").addEventListener("click", () => {
document.body.classList.toggle("dark");
});

// CONTADOR
let cont = 0;
document.getElementById("contadorBtn").addEventListener("click", () => {
cont++;
document.getElementById("contador").innerText = "Cliques: " + cont;
});

// ALTERAR TEXTO
document.getElementById("btnTexto").addEventListener("click", () => {
document.getElementById("textoOriginal").innerText = "Texto alterado com JavaScript!";
});

// MOSTRAR MAIS
document.getElementById("btnMostrar").addEventListener("click", () => {
let extra = document.getElementById("extra");
extra.style.display = extra.style.display === "none" ? "block" : "none";
});

// ALTERAR COR
document.getElementById("btnCor").addEventListener("click", () => {
document.body.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// CEP
document.getElementById("buscarCep").addEventListener("click", () => {
let cep = document.getElementById("cep").value;

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(res => res.json())
.then(d => {
if(d.erro){
document.getElementById("resCep").innerText = "CEP inválido!";
return;
}
document.getElementById("resCep").innerHTML =
`Rua: ${d.logradouro}<br>
Bairro: ${d.bairro}<br>
Cidade: ${d.localidade}<br>
Estado: ${d.uf}`;
});
});

// CNPJ
document.getElementById("buscarCnpj").addEventListener("click", () => {
let cnpj = document.getElementById("cnpj").value.replace(/\D/g,'');

fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
.then(res => res.json())
.then(d => {
if(d.message){
document.getElementById("resCnpj").innerText = "CNPJ inválido!";
return;
}
document.getElementById("resCnpj").innerHTML =
`Empresa: ${d.razao_social}<br>
Situação: ${d.descricao_situacao_cadastral}<br>
Cidade: ${d.municipio} - ${d.uf}`;
});
});

// IP
document.getElementById("buscarIp").addEventListener("click", () => {
fetch("https://ipapi.co/json/")
.then(res => res.json())
.then(d => {
document.getElementById("resIp").innerHTML =
`Cidade: ${d.city}<br>
Estado: ${d.region}<br>
País: ${d.country_name}`;
});
});

// FORMATA CNPJ
document.getElementById("cnpj").addEventListener("input", (e) => {
let v = e.target.value.replace(/\D/g,'');

v = v.replace(/^(\d{2})(\d)/, "$1.$2");
v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
v = v.replace(/(\d{4})(\d)/, "$1-$2");

e.target.value = v;
});