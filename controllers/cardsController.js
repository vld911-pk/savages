const cardsManager = require('../models/cardsManager');

function getCardsResults(req, res) {
     // res.send('<p>Yep i\'m here</p>')
    return res.json({message : 'Yep i\'m here'});
}

function setCardsResult(req, res) {
    const data = req.body;
    console.log('--------->', data);
    return res.json({message : 'setter'});
}

module.exports = {
    getCardsResults,
    setCardsResult,
}