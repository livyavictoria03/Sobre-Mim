var data = new Date().getFullYear();
document.getElementById("data").innerHTML = data;

document.getElementById("hamburguer").onclick = function() {
        document.getElementById("menu-lateral-externo").style.right = '0';
};
    
   
document.getElementById('fechar-menu').onclick = function() {
        document.getElementById("menu-lateral-externo").style.right = '-250px';
}; 
    

























