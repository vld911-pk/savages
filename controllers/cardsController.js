const cardsManager = require('../models/cardsManager');

async function getCardsResults(req, res){
    const userId = req.params.userId;
    const data = await (await cardsManager.getUserCardsResult(userId)).slice(-5);
    return res.status(200).json({data, message: 'ok'});
}

async function setCardsResult(req, res) {
    const {results, date} = res.locals.body;
    const userId = res.locals.userId;
    await cardsManager.setCardsResult(results, date, userId);
    return res.status(200).json({message : 'setted'});
}

module.exports = {
    getCardsResults,
    setCardsResult,
}