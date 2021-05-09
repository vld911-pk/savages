const { Router } = require("express");
const cardsController = require("../controllers/cardsController");
const cardsRouter = Router();


cardsRouter.get('/cards/user-results', cardsController.getCardsResults);
cardsRouter.post('/cards/set-cards-result', cardsController.setCardsResult);

module.exports = cardsRouter;

