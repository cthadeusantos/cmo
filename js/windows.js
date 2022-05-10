function area_janelas_ambiente(){
    let value1 = document.getElementById("qte_janelas").value;
    let value2 = document.getElementById("area_janela").value;
    return value1 * value2;
}

function area_necessaria_ambiente(){
    return area_ambiente() / 6;
}

function observacao3(){
    if (area_janelas_ambiente() >= area_necessaria_ambiente()){
        string = "Área de ventilação natural em conformidade";
    } else {
        string = "Área de ventilação natural não conforme";
    }
    return string;
}