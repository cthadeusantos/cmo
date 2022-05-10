function taxa_ren_ar_exterior(){
    let value1 = parseInt(document.getElementById("tipo_condicionador").value);
    let dict = {1: 0, 2: 3.2, 3: 3.2, 4: 0};
    return dict[value1];
}

function taxa_ven_ambiente(){
    let value1 = parseInt(document.getElementById("tipo_ventilacao").value);
    let dict = {1: 0.18, 2: 6.7, 3: 1.3, 4: 2.0};
    return dict[value1];
}

function taxa_renovacao(){
    return taxa_ren_ar_exterior() + taxa_ven_ambiente();
}

function vazao_exterior(){
    return taxa_renovacao() * volume_ambiente();
}

function taxa_ven_pessoa(){
    let value1 = parseInt(document.getElementById("qte_ocupantes").value);
    return vazao_exterior() / value1;
}
