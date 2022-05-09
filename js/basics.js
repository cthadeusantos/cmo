function maximo_risco_infeccao() {
    let prevalencia = 0;
    let imunizados = 0;
    let qte_ocupantes = 0;
    prevalencia = parseInt(document.getElementById("prevalencia").value) / 100;
    imunizados = parseInt(document.getElementById("imunizados").value) / 100;
    qte_ocupantes = parseInt(document.getElementById("qte_ocupantes").value);
    return (0.05/(qte_ocupantes*(1-prevalencia)*(1-(imunizados*0.5)))) * 100; 
};