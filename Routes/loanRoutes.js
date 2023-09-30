const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

/*router.route('/status')
    .get(loanController.getLoanByAmount);*/

/*router.route('/')
    //.get(loanController.getLoan)
    .get(loanController.getAllLoans)
    .post(loanController.createLoan)

router.route('/countDocuments')
    .get(loanController.countDocuments)

router.route('/:id')
    .get(loanController.getLoanById)
    .patch(loanController.updateLoanById)
    .put(loanController.updateLoanById)
    .delete(loanController.deleteLoanById);*/

router.route('/status/approved')
    .get(loanController.getLoanByStatus)
console.log("here");
module.exports = router;