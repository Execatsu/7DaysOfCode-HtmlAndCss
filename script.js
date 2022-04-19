document.getElementById("btnHome").addEventListener('click', topPage);
document.getElementById("cadastrarEmail").addEventListener('click', topPage);

function topPage() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}