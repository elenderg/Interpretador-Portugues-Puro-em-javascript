var ArtigoIndefinidoMasculinoSingular = "um";
var ArtigoIndefinidoFemininoSingular = "uma";
var ArtigoIndefinidoMasculinoPlural =  "uns";
var ArtigoIndefinidoFemininoPlural =  "umas";
var ArtigoDefinidoMasculinoSingular =    "o";
var ArtigoDefinidoFemininoSingular =     "a";
var ArtigoDefinidoMasculinoPlural =     "os";
var ArtigoDefinidoFemininoPlural =      "as";


var ArtigosMasculinosPlurais =[
    ArtigoDefinidoMasculinoPlural, ArtigoIndefinidoMasculinoPlural
];

var ArtigosMasculinosSingulares =[
    ArtigoDefinidoMasculinoSingular, ArtigoIndefinidoMasculinoSingular
];

var ArtigosIndefinidosMasculinos = [
    ArtigoIndefinidoMasculinoSingular,ArtigoIndefinidoMasculinoPlural
];

var ArtigosDefinidosMasculinos = [
    ArtigoDefinidoMasculinoSingular,ArtigoDefinidoMasculinoPlural
];

var ArtigosMasculinos = [
    ArtigosDefinidosMasculinos, ArtigosIndefinidosMasculinos
];


var ArtigosFemininosPlurais =[
    ArtigoDefinidoFemininoPlural, ArtigoIndefinidoFemininoPlural
];

var ArtigosFemininosSingulares =[
    ArtigoDefinidoFemininoSingular, ArtigoIndefinidoFemininoSingular
];

var ArtigosDefinidosFemininos = [
    ArtigoDefinidoFemininoSingular,ArtigoDefinidoFemininoPlural
];

var ArtigosIndefinidosFemininos = [
    ArtigoIndefinidoFemininoSingular,ArtigoIndefinidoFemininoPlural
];

var ArtigosFemininos = [
    ArtigosDefinidosFemininos, ArtigosIndefinidosFemininos
];

var ArtigosPlurais = [
    ArtigosMasculinosPlurais, ArtigosFemininosPlurais
];

var ArtigosSingulares = [
    ArtigosMasculinosSingulares, ArtigosFemininosSingulares
];

var Artigos = [
    ArtigosPlurais, ArtigosSingulares
];