console.log("####### 'find' Helper #######");

var list = [
    { nome: "nome1", cognome: "cognome1"},
    { nome: "nome2", cognome: "cognome2"},
    { nome: "nome3", cognome: "cognome3"},
    { nome: "nome4", cognome: "cognome4"},
];

console.log(list.find((item) => item.cognome === "cognome3"));