function ni_limite(){
    return 0.1861 * Math.pow(qte_ocupantes(), -2.205);
}

function Hr_teste(){ 
    let a = indice_variante() * 18.6 * 0.288;
    let pot = Math.pow(1 - maximo_risco_infeccao(), 1 / (qte_ocupantes() - 1) );
    /* let x =  (Math.log( 1 -  (( 1 - pot ) / prevalencia())) / a);  */
    let x = Math.log(1 - pot / prevalencia()) ;
    console.log("HR_TESTE==>", maximo_risco_infeccao(), qte_ocupantes(), prevalencia(), indice_variante(), x , pot, a);
    return x;
}

function indice_variante(){
    let dict = {1: 1, 2: 2, 3: 2.5};
    return dict[variante()];
}

function Hr() {
    let value = 0.2;
    if (prevalencia() >= ni_limite()){
        value =  Hr_teste();
    }
    return value;
}

function Nmax(){
    return Hr() * qte_ocupantes() * 18.6 * 0.288;
}

// essa funcao foi apenas colocada para manter compatibilidade
// visual com a excel , deve ser descartada no futuro
function lambda(){
    return taxa_ventilacao_equivalente();
}

function tempo_max_ocupacao(rss){
    console.log("rss-->", rss, Hr(), volume_ambiente(), lambda(), quanta() ,fator_respiracao() ,protecao_exalacao(), protecao_inalacao());
    return ( Hr() * volume_ambiente() * lambda())/(rss * quanta() * fator_respiracao() * protecao_exalacao() * protecao_inalacao())
}

function H(){
    return;
}

function tabela(){
    let D = new Array(25);
    let rss = new Array(25);
    let indice = new Array(4);
    let RSS = 1.0;
    for(let i = 0; i < 25; i++){
        console.log("RSS", RSS);
        D[i] = tempo_max_ocupacao(RSS);
        console.log("D", i, D[i]);
        indice[0] = (lambda() * D[i]<=6) ? 1 : 0;
        indice[1] = 1 - (1 - Math.exp(-lambda() * D[i]))/(-lambda()*D[i]);
        indice[2] = (lambda() * D[i] > 6) ? 1 : 0;
        indice[3] = 0.92;
        _rss = indice[0] * indice[1] + indice[2] * indice[3];
        rss[i] = _rss;
        console.log(indice[0], indice[1], indice[2], indice[3]);
    }

/*     let myObj;    
    for (let i = 0; i < 25; i++){
        myObj = (indice[i], rss[i]);
        console.log(indice[i]);
        console.log(rss[i]);
    } */
}

function taxa_ventilacao_equivalente(){
    return taxa_renovacao() + (qte_purificador() * vazao_purificacao()) / volume_ambiente();
}

