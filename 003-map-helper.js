console.log("####### 'map' Helper #######");
var list = [
    { nome: "nome1", cognome: "cognome1"},
    { nome: "nome2", cognome: "cognome2"},
    { nome: "nome3", cognome: "cognome3"},
    { nome: "nome4", cognome: "cognome4"},
];

list
    .map((item) => {
        console.log(item);
        return item;
    })
    .map(item =>
        ({
            nomeCompleto: `${item.nome} ${item.cognome}`,
            nickName: `${item.nome}_${item.cognome.substring(0, 1)}`
        }))
    .forEach(item => console.log(item));
