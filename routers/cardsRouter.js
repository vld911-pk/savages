const { Router } = require("express");
const cardsController = require("../controllers/cardsController");
const cardsRouter = Router();

const getData = async (req,res,next) => {
       const {result, date} = req.body;
       const userId = req.params.userId;
       res.locals = { ...res.locals, body: req.body, userId };
    await next();
}

cardsRouter.get('/cards/user-results/:userId', cardsController.getCardsResults);
cardsRouter.post('/cards/set-cards-result/:userId', getData, cardsController.setCardsResult);

module.exports = cardsRouter;

