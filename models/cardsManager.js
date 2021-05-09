const knex = require("../db");

async function setCardsResult(res){
    await knex('cardsResults').insert();
}

// function getUserCardsResult(){
//     return ;
// } 

// module.exports = {
//     getUserCardsResult;
// }