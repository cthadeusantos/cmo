function area_ambiente(){
    let value1 = parseFloat(document.getElementById("largura").value);
    let value2 = parseFloat(document.getElementById("profundidade").value);
    return value1 * value2;
}

function volume_ambiente(){
    let value1 = parseFloat(document.getElementById("altura").value);
    return area_ambiente() * value1;
}

function taxa_ocupacao(){
    let value1 = area_ambiente();
    let value2 = numero_ocupantes();
    return (value1 / value2);
}

function distanciamento(){
    return Math.sqrt(taxa_ocupacao());
}

function calc_ocupantes(){
    let value1 = parseFloat(document.getElementById("dist_frontal").value);
    let value2 = parseFloat(document.getElementById("dist_lateral").value);
    return (area_ambiente() /(value1 * value2)) * value_ambiente();
}

function value_ambiente(){
    let value1 = parseInt(document.getElementById("ambiente").value);
    let dict = {1: 0.75, 2: 0.5};
    return dict[value1];
}

function numero_ocupantes(){
    return parseInt(document.getElementById("qte_ocupantes").value);
}