function DivideCodigo() {
    let codigo = document.getElementById('codigo').value;
    //console.log(codigo);
    codigo = codigo.toLowerCase();
    //console.log(codigo);
    codigo = codigo.split(" ");
    //console.log(codigo);
    ExaminaTermo(codigo);
}

function PlanificaArray(ArrayComSubarrays) {
    let ArrayPlanificado = ArrayComSubarrays.flat(Infinity);
    console.log("Array planificado com sucesso.")
    return ArrayPlanificado;
}

function DivideStringComSimbolos(ArrayDeTermos,Simbolos) {
    console.log(ArrayDeTermos);
    const VerificaElentosIguais = ArrayDeTermos.some((Termo) => Simbolos.includes(Termo)); // checks if any element of ArrayDeTermos is in Simbolos
    // if a string has any symbol on it, it will be split into substrings
    if (VerificaElentosIguais) {
        console.log("Tem simbolos");
        let ArrayDeTermosComSimbolos = Simbolos;
        ArrayDeTermosComSimbolos.forEach((Simbolo) => {
            ArrayDeTermos.forEach((Termo) => {
                if (Termo.includes(Simbolo)) {
                    let ArrayDeSubtermos = Termo.split(Simbolo);
                    ArrayDeTermos.splice(ArrayDeTermos.indexOf(Termo), 1, ...ArrayDeSubtermos);
                }
            }
            );



    for (let i = 0; i < ArrayDeTermos.length; i++) {
        if (ArrayDeTermos[i].includes(Simbolo)) {
            ArrayDeTermos[i] = ArrayDeTermos[i].substr(0, ArrayDeTermos.length + 1);
            console.log(ArrayDeTermos[i]);
            let IndiceDoProximoTermo = ArrayDeTermos.length + 1;
            //checks if a index in a array is null
            if (ArrayDeTermos[IndiceDoProximoTermo] === undefined) {
                ArrayDeTermos[IndiceDoProximoTermo] = Simbolo;
                return ArrayDeTermos;
            }
            console.log(IndiceDoProximoTermo);
            console.log(ArrayDeTermos);
            ArrayDeTermos.splice(IndiceDoProximoTermo, 0, Simbolo);
            console.log(ArrayDeTermos);
        }
    }
    console.log(ArrayDeTermos);
    console.log("Simbolos devidamente separados.");
    return ArrayDeTermos;
}



function ExaminaTermo(codigo) {
    // flatten array and its subarrays 
    let TermosValidos = PlanificaArray(PalavrasChave);
    console.log("A função PlanificaArray foi finalizada");
    console.log(codigo);
    let Simbolos = [
        ".",",",":",";","[","]","(",")","º","ª","°","+"
        ,"-","%","/","*","=",">","<","¬","|","&","#","~"
        ,"^","$","€","£","¥","¢","¤","¬","¦","ª","º"
        ,"¹","²","³","¼","½","¾",
    ]
    let ArrayDeTermos = DivideStringComSimbolos(codigo,Simbolos); // divide string with symbols
    console.log(ArrayDeTermos);    
    console.log("A função 'DivideStringComSimbolo' foi finalizada");        
    for (let IndiceDoTermoAtual = 0; IndiceDoTermoAtual < ArrayDeTermos.length; IndiceDoTermoAtual++) {
        console.log(IndiceDoTermoAtual);
        const TermoAtual = ArrayDeTermos[IndiceDoTermoAtual];
        console.log(TermoAtual);
        if (TermosValidos.includes(TermoAtual)) {
            console.log("Encontrado termo válido:" + TermoAtual);
            CategorizaTermo(TermoAtual);
        }
        if (!TermosValidos.includes(TermoAtual)) {
            console.log("O termo:", TermoAtual, "é inválido.")
        }
    }
}

function CategorizaTermo(Termo) {
    if (Termo === Operadores) {
        ReconheceOperacao()
    }
    if (Termo === Artigos) {
        ReconeceArtigo()
    }
    if (isNaN(Termo) === false) {
        AtribuiValor(Termo);
    }
    // checks if Termo starts with double quotes
    if (Termo.startsWith('"') && Termo.endsWith('"')) {
        AtribuiValor(Termo);
    }
    if (Termo.startsWith('$')) {
        AtribuiValor(Termo);
    }
}

function AtribuiValor(Termo) {
    if (Termo.startsWith('"')) {
        Termo = Termo.slice(1, Termo.length - 1); // remove double quotes
    }
    if (Termo.startsWith('$')) {
        Termo = Termo.slice(1, Termo.length);   // remove dollar sign
        Termo = parseInt(Termo, 16); // converts hex value to decimal
    }
    if (isNaN(Termo) === false) { // checks is Termo is a integer
        Termo = parseInt(Termo);
    }
}