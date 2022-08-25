console.log("####### 'forEach' Helper #######");
var list = [
    { nome: "nome1", cognome: "cognome1"},
    { nome: "nome2", cognome: "cognome2"},
    { nome: "nome3", cognome: "cognome3"},
    { nome: "nome4", cognome: "cognome4"},
];

list.forEach((item) => console.log(`-> ${item.nome} ${item.cognome.substring(0, 1)}.`));

