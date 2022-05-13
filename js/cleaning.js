function vazao_purificacao(){
    let dict = {1: 300, 2: 600, 3: 1500};
    return dict[tamanho_purificador()];
}

function taxa_purificacao(){
    return (qte_purificador * vazao_purificacao()) / volume_ambiente();
}
