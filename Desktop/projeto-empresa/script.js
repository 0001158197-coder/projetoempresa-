// Alerta ao carregar
window.addEventListener("load", function(){
    alert("Bem-vindo ao site!");
});

// Função segura
function addClick(id, callback){
    let el = document.getElementById(id);
    if(el){
        el.addEventListener("click", callback);
    }
}

// 1 - Boas-vindas
addClick("btnBoasVindas", function(){
    document.getElementById("mensagem").textContent =
    "Bem-vindo ao meu site desenvolvido com HTML, CSS e JavaScript!";
});

// 2 - Alterar texto
addClick("btnTexto", function(){
    document.getElementById("textoOriginal").textContent =
    "Este site agora possui interatividade com JavaScript!";
});

// 3 - Alterar cor
addClick("btnCor", function(){
    let sec = document.getElementById("inicio");
    if(sec){
        sec.style.backgroundColor = "#dbeafe";
    }
});

// 4 - Mostrar / esconder
let visivel = false;

addClick("btnMostrar", function(){
    let texto = document.getElementById("extra");

    if(texto){
        texto.style.display = visivel ? "none" : "block";
        visivel = !visivel;
    }
});

// 5 - Menu
let itens = document.querySelectorAll(".menu-item");

itens.forEach(function(item){
    item.addEventListener("click", function(){
        alert("Você acessou a seção " + item.textContent);
    });
});

// 6 - Imagem
let img = document.getElementById("imagem");

if(img){
    img.addEventListener("mouseover", function(){
        img.src = "https://via.placeholder.com/400/0000FF";
    });

    img.addEventListener("mouseout", function(){
        img.src = "https://via.placeholder.com/400";
    });
}

// EXTRA - Dark Mode
addClick("darkMode", function(){
    document.body.classList.toggle("dark");
});

// EXTRA - Contador
let cont = 0;

addClick("contadorBtn", function(){
    cont++;
    let p = document.getElementById("contador");
    if(p){
        p.textContent = "Cliques: " + cont;
    }
});

// EXTRA - Validação formulário
let form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(e){
        let nome = document.querySelector("input[name='nome']").value;

        if(nome === ""){
            alert("O nome não pode estar vazio!");
            e.preventDefault();
        }
    });
}