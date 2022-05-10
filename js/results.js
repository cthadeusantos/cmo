function taxa_ventilacao_equivalente(){
    let value1 = parseInt(document.getElementById("qte_purificador").value);
    return taxa_renovacao() + (value1 * vazao_purificacao()) / volume_ambiente();
}