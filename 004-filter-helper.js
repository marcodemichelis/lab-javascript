console.log("####### 'filter' Helper #######");

var list = [
    { nome: "nome1", cognome: "cognome1"},
    { nome: "nome2", cognome: "cognome2"},
    { nome: "nome3", cognome: "cognome3"},
    { nome: "nome4", cognome: "cognome4"},
];

list
    .filter((item, index, origArray) => (index % 2) === 0)
    .forEach((item) => console.log(`filtered: ${item.cognome} -> ${item.nome}`));
