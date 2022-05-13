function info_janelas() {
    let string = "Continuar avaliação";
    if (janelas() == 0){
        string = "Deficiência de ventilação natural";
    };
    return string;
}

function info_renovacao() {
    let string = "Continuar avaliação";
    if (renovacao() == 0){
        string = "Verificar tipo de ventilação no ambiente";
    };
    return string;
}

function observacao2() {
    let string = "Continuar avaliação";
    if (janelas() == 0 && renovacao() == 0 ){
        string = "Deficiência de ventilação. Necessária melhoria de tratamento do ar para uso.";
    };
    return string;
}