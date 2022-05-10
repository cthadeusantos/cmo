function vazao_purificacao(){
    let value1 = parseInt(document.getElementById("tamanho").value);
    let dict = {1: 300, 2: 600, 3: 1500};
    return dict[value1];
}

function taxa_purificacao(){
    let value1 = parseInt(document.getElementById("qte_purificador").value);
    return (value1 * vazao_purificacao()) / volume_ambiente();
}
