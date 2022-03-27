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

function DivideStringComSimbolos(ArrayDeTermosInformados,SimboloDaLista) {
    let NovoArrayDeTermos;    
    let SimboloComEspacos = " " + SimboloDaLista + " ";
    if(SimboloDaLista != undefined){
        for (let indice = 0; indice < ArrayDeTermosInformados.length; indice++)
        {            
            if(ArrayDeTermosInformados[indice].includes(SimboloDaLista) // verifica se a string contém o símbolo
            && ArrayDeTermosInformados[indice].length > 1
            && ArrayDeTermosInformados[indice] !== SimboloComEspacos) // verifica se a string não é o próprio símbolo em si
            {                
                ArrayDeTermosInformados[indice] = ArrayDeTermosInformados[indice].replaceAll(SimboloDaLista,SimboloComEspacos);                
                // insere um espaço entre o símbolo e a string
                ArrayDeTermosInformados[indice] = ArrayDeTermosInformados[indice].split(" ");
                // cria um novo array dentro do array original, com os símbolos em indices distintos
                NovoArrayDeTermos = ArrayDeTermosInformados.flat(Infinity);                
                //cria um novo array com o array original planificado       
                console.log("O símbolo " + SimboloDaLista + " foi devidamente separado.");
            }
            if(!ArrayDeTermosInformados[indice].includes(SimboloDaLista)) // verifica se a string contém o símbolo            
            {
                let SimbolosNaoEncontrados = "";
                SimbolosNaoEncontrados = SimbolosNaoEncontrados + SimboloDaLista;
                NovoArrayDeTermos = ArrayDeTermosInformados.flat(Infinity);                
                //cria um novo array com o array original planificado       
                //console.log("O símbolo " + SimbolosNaoEncontrados + " não encontrado junto a uma string durante essa passada no array.");
            }                    
        }
        if (NovoArrayDeTermos !== undefined){
            return NovoArrayDeTermos;
        }
    }
     
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
    let MeusSimbolos = [
        ".",",",":",";","[","]","(",")","º","ª","°","+"
        ,"-","%","/","*","=",">","<","¬","|","&","#","~"
        ,"^","$","€","£","¥","¢","¤","¬","¦","ª","º"
        ,"¹","²","³","¼","½","¾",'"'
    ]
    let ArrayDeTermosInicial;
    for (let index = 0; index < MeusSimbolos.length; index++) {
        ArrayDeTermosInicial = DivideStringComSimbolos(codigo,MeusSimbolos[index]); // divide string with symbols
    }    
    var ArrayDeTermosFinal = [];
    for (let index = 0; index < MeusSimbolos.length; index++) {
        ArrayDeTermosFinal = DivideStringComSimbolos(ArrayDeTermosInicial,MeusSimbolos[index]); // divide string with symbols
        //console.log(ArrayDeTermosFinal);
    }    
    if (ArrayDeTermosFinal !== undefined)
    {
    
    ArrayDeTermosFinal = ArrayDeTermosFinal.filter((elemento) => elemento);
    }
    if (ArrayDeTermosFinal == undefined)
    {
        console.log("array não inicializado");
        console.log(codigo);
    }
    //ArrayDeTermos = ArrayDeTermos.join('');
    if (ArrayDeTermosFinal !== undefined){
    console.log("O array final está assim:" + ArrayDeTermosFinal);
        for (
            let IndiceDoTermoAtual = 0; 
            IndiceDoTermoAtual < ArrayDeTermosFinal.length; 
            IndiceDoTermoAtual++
            ) 
        {
            //console.log(IndiceDoTermoAtual);
            const TermoAtual = ArrayDeTermosFinal[IndiceDoTermoAtual];
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