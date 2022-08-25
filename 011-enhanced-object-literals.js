console.log("####### Enhanced Object Literals #######");
// In the object declaration, you can put only the variable without the name of the property if it coincides with the variable containing the value
var nome = "pippo";
var cognome = "surname";
var es = {
    nome,
    cognome
};
console.log(`${es.nome} - ${es.cognome}`);