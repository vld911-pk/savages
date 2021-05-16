const knex = require("../db");

async function setCardsResult(res, date, userId){
    await knex('cardsResults')
        .insert({userId, score: res, date})
        .where('userId', '=', userId);
}

async function getUserCardsResult(userId){
    return knex('cardsResults')
        .select('score', 'date')
        .where('userId', '=', userId);
} 

module.exports = {
    getUserCardsResult,
    setCardsResult,
}