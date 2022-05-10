function protecao_exalacao(){
    let value1 = parseInt(document.getElementById("tipo_mask").value);
    let dict = {1: 1, 2: 0.5, 3: 0.1};
    return dict[value1];
}

function protecao_inalacao(){
    let value1 = parseInt(document.getElementById("tipo_mask").value);
    let dict = {1: 1, 2: 0.7, 3: 0.1};
    return dict[value1];
}

function quanta() {
    let value1 = parseInt(document.getElementById("atividade").value);
    let dict = { 1: 1, 2: 4.7, 3: 30.3, 4: 1.2, 5: 5.7, 6: 32.6 };
    return dict[value1];
}