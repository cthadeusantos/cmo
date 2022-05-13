function taxa_ventilacao_equivalente(){
    return taxa_renovacao() + (qte_purificador() * vazao_purificacao()) / volume_ambiente();
}