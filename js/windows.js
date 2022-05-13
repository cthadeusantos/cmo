function area_janelas_ambiente(){
    return qte_janelas() * area_janela;
}

function area_necessaria_ambiente(){
    return area_ambiente() / 6;
}

function observacao3(){
    let string = "Área de ventilação natural não conforme"; 
    if (area_janelas_ambiente() >= area_necessaria_ambiente()){
        string = "Área de ventilação natural em conformidade";
    };
    return string;
}