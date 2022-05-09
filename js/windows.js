function area_total_ambiente(){
    let value1 = document.getElementById("qte_janelas").value;
    let value2 = document.getElementById("area_janela").value;
    return value1 * value2;
}

function area_ambiente(){
    let value1 = parseFloat(document.getElementById("largura").value);
    let value2 = parseFloat(document.getElementById("profundidade").value);
    return value1 * value2;
}

function area_necessaria_ambiente(){
    return area_ambiente() / 6;
}