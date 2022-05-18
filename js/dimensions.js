function area_ambiente(){
    return largura() * profundidade();
}

function volume_ambiente(){
    return area_ambiente() * altura();
}

function taxa_ocupacao(){
    return (area_ambiente() / qte_ocupantes());
}

function distanciamento(){
    return Math.sqrt(taxa_ocupacao());
}

function calc_ocupantes(){
    return (area_ambiente() /(dist_frontal() * dist_lateral())) * value_ambiente();
}

function value_ambiente(){
    let dict = {1: 0.75, 2: 0.5};
    return dict[ambiente()];
}

