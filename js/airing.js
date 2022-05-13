function taxa_ren_ar_exterior(){
    let dict = {1: 0, 2: 3.2, 3: 3.2, 4: 0};
    return dict[tipo_condicionador()];
}

function taxa_ven_ambiente(){
    let dict = {1: 0.18, 2: 6.7, 3: 1.3, 4: 2.0};
    return dict[tipo_ventilacao()];
}

function taxa_renovacao(){
    return taxa_ren_ar_exterior() + taxa_ven_ambiente();
}

function vazao_exterior(){
    return taxa_renovacao() * volume_ambiente();
}

function taxa_ven_pessoa(){
    return vazao_exterior() / qte_ocupantes();
}
