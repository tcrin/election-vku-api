module.exports = function(router){
    var historyController = require('../controllers/history_controller');
    router.get('/history-election', historyController.getHistory );
    router.get('/history-election/:id', historyController.getHistoryById );
    router.get('/history-election/:txt_hash', historyController.getHistoryByTXTHash );
    router.post('/history-election', historyController.insertHistory );
};