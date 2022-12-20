

module.exports = function(router){
    var positionController = require('../controllers/position_controller');
    router.get('/position', positionController.getAllPosition );
    router.get('/position/:id_position', positionController.getPositionById );
    router.post('/position', positionController.insertPosition );
    router.put('/position', positionController.updatePosition );
    router.delete('/position/:id_position', positionController.deletePosition );
};