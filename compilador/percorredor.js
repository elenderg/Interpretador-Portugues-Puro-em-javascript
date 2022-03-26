function DivideCodigo() {
    let codigo = document.getElementById('codigo').value;    
    codigo = codigo.toLowerCase();    
    codigo = codigo.split(" ");    
    ExaminaTermo(codigo);
}

function PlanificaArray(ArrayComSubarrays) {
    let ArrayPlanificado = ArrayComSubarrays.flat(Infinity);
    console.log("Array planificado com sucesso.")
    return ArrayPlanificado;
}

function DivideStringComSimbolos(ArrayDeTermos,Simbolo) {
    let NovoArrayDeTermos;    
    let SimboloComEspacos = " " + Simbolo + " ";
    if(Simbolo != undefined){
        for (let indice = 0; indice < ArrayDeTermos.length; indice++) {            
            if(ArrayDeTermos[indice].includes(Simbolo) // verifica se a string contém o símbolo
            && ArrayDeTermos[indice].length > 1
            && ArrayDeTermos[indice] !== SimboloComEspacos) // verifica se a string não é o próprio símbolo em si
            {                
                ArrayDeTermos[indice] = ArrayDeTermos[indice].replaceAll(Simbolo,SimboloComEspacos);                
                // insere um espaço entre o símbolo e a string
                ArrayDeTermos[indice] = ArrayDeTermos[indice].split(" ");
                // cria um novo array dentro do array original, com os símbolos em indices distintos
                NovoArrayDeTermos = ArrayDeTermos.flat(Infinity);                
                //cria um novo array com o array original planificado       
            }                    
        }
        
    }
    console.log(Simbolo + " devidamente separado.");
    return NovoArrayDeTermos; 
}

function DeslocaElementosDoArray(ArrayOriginal, IndiceInicial, IndiceFinal) {
    var elemento = ArrayOriginal[IndiceInicial];
    ArrayOriginal.splice(IndiceInicial, 1);
    ArrayOriginal.splice(IndiceFinal, 0, elemento);
}


function ExaminaTermo(codigo) {
    // flatten array and its subarrays 
    let TermosValidos = PlanificaArray(PalavrasChave);
    console.log("A função PlanificaArray foi finalizada");    
    let Simbolos = [
        ".",",",":",";","[","]","(",")","º","ª","°","+"
        ,"-","%","/","*","=",">","<","¬","|","&","#","~"
        ,"^","$","€","£","¥","¢","¤","¬","¦","ª","º"
        ,"¹","²","³","¼","½","¾",'"'
    ]
    let ArrayDeTermos;
    for (let index = 0; index < Simbolos.length; index++) {
        ArrayDeTermos = DivideStringComSimbolos(codigo,Simbolos[index]); // divide string with symbols
    }
    let Novo;
    for (let index = 0; index < Simbolos.length; index++) {
        Novo = DivideStringComSimbolos(ArrayDeTermos,Simbolos[index]); // divide string with symbols
    }    
    
    Novo = Novo.filter((elemento) => elemento);
    //ArrayDeTermos = ArrayDeTermos.join('');
    console.log(Novo);
    for (let IndiceDoTermoAtual = 0; IndiceDoTermoAtual < Novo.length; IndiceDoTermoAtual++) {
        //console.log(IndiceDoTermoAtual);
        const TermoAtual = Novo[IndiceDoTermoAtual];
        //console.log(TermoAtual);
        if (TermosValidos.includes(TermoAtual)) {
            console.log(IndiceDoTermoAtual + ". Encontrado termo válido: " + TermoAtual);
            CategorizaTermo(TermoAtual);
        }
        if (!TermosValidos.includes(TermoAtual)) {
            console.log(IndiceDoTermoAtual + ". Encontrado termo inválido: " + TermoAtual);
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