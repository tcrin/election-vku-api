module.exports = function(router){
    var fullInfoController = require('../controllers/full_info_controller');
    router.get('/full-data-election', fullInfoController.getFullInfo );
    router.get('/full-data-election/:id_event', fullInfoController.getCandidateOfEvent );
    router.get('/full-data-valid-election/:id_event', fullInfoController.getCandidateOfEventValid );
};