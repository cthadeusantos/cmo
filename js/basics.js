function maximo_risco_infeccao() {
    return (0.05 / (qte_ocupantes() * (1 - prevalencia()) * (1 - (imunizados() * 0.5)))) * 100; 
};

function prevalencia() {
    return parseFloat(document.getElementById("prevalencia").value) / 100;;
}

function imunizados() {
    return parseFloat(document.getElementById("imunizados").value) / 100;
}

function qte_ocupantes(){
    return parseFloat(document.getElementById("qte_ocupantes").value);
}
