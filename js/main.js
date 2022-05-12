function main(){
    document.getElementById("max_risk").innerHTML = maximo_risco_infeccao().toFixed(3);
    document.getElementById("info_janelas").innerHTML = info_janelas();
    document.getElementById("info_renovacao").innerHTML = info_renovacao();
    document.getElementById("observacao2").innerHTML = observacao2();
    document.getElementById("area_total").innerHTML = area_janelas_ambiente().toFixed(2);
    document.getElementById("area_necessaria").innerHTML = area_necessaria_ambiente().toFixed(2);
    document.getElementById("area_ambiente").innerHTML = area_ambiente().toFixed(2);
    document.getElementById("tx_ocupacao").innerHTML = taxa_ocupacao().toFixed(0);
    document.getElementById("distanciamento").innerHTML = distanciamento();
    document.getElementById("calc_ocupantes").innerHTML = calc_ocupantes().toFixed(0);
    document.getElementById("quanta").innerHTML = quanta();
    document.getElementById("exalacao").innerHTML = protecao_exalacao();
    document.getElementById("inalacao").innerHTML = protecao_inalacao();
    document.getElementById("renovacao_ambiente").innerHTML = taxa_ren_ar_exterior();
    document.getElementById("renovacao_ventilacao").innerHTML = taxa_ven_ambiente();
    document.getElementById("taxa_renovacao").innerHTML = taxa_renovacao();
    document.getElementById("vazao_ar_exterior").innerHTML = vazao_exterior();
    document.getElementById("taxa_ventilacao_pessoa").innerHTML = taxa_ven_pessoa();
    document.getElementById("vazao_purificacao").innerHTML = vazao_purificacao();
    document.getElementById("taxa_purificacao").innerHTML = taxa_purificacao();    
    document.getElementById("taxa_vent_equivalente").innerHTML = taxa_ventilacao_equivalente();
    document.getElementById("fator_respiracao").innerHTML = fator_respiracao();
};

