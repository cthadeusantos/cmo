function tipo_mascara(){
    return parseInt(document.getElementById("tipo_mask").value);
}

function atividade(){
    return parseInt(document.getElementById("atividade").value);
}

function protecao_exalacao(){
    let value1 = tipo_mascara();
    let dict = {1: 1, 2: 0.5, 3: 0.1};
    return dict[value1];
}

function protecao_inalacao(){
    let value1 = tipo_mascara();
    let dict = {1: 1, 2: 0.7, 3: 0.1};
    return dict[value1];
}

function quanta() {
    let value1 = atividade();
    let dict = { 1: 1, 2: 4.7, 3: 30.3, 4: 1.2, 5: 5.7, 6: 32.6 };
    return dict[value1];
}

function fator_respiracao() {
    let value1 = atividade();
    let dict = { 1: 1.1, 2: 1.1, 3: 1.1, 4: 1.1, 5: 1.1, 6: 1.1 };
    return dict[value1];
}


