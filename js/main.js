function main(){
    document.getElementById("max_risk").innerHTML = maximo_risco_infeccao().toFixed(3);
    document.getElementById("info_janelas").innerHTML = info_janelas();
    document.getElementById("info_renovacao").innerHTML = info_renovacao();
    document.getElementById("observacao2").innerHTML = observacao2();
    document.getElementById("area_necessaria").innerHTML = area_necessaria_ambiente();
};

