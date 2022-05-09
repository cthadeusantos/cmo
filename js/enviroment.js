function info_janelas() {
    let value = document.getElementById("janelas").value;
    if (value == "0"){
    string = "Deficiência de ventilação natural";
    } else {
    string = "Continuar avaliação";
    };
    return string;
}

function info_renovacao() {
    let value = document.getElementById("renovacao").value;
    if (value == "0"){
        string = "Verificar tipo de ventilação no ambiente";
    } else {
        string = "Continuar avaliação";
    };
    return string;
}

function observacao2() {
    let string = "";
    let value1 = document.getElementById("janelas").value;
    let value2 = document.getElementById("renovacao").value;
    if (value1 == "0" && value2 == "0" ){
        string = "Deficiência de ventilação. Necessária melhoria de tratamento do ar para uso.";
    } else {
        string = "Continuar avaliação";
    };
    return string;
}