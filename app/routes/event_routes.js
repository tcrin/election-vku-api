module.exports = function(router){
    var eventController = require('../controllers/event_controller');
    router.get('/event', eventController.getAllEvent );
    router.get('/event-position', eventController.getEventPosition );
    router.get('/event/:id_event', eventController.getEventById );
    router.post('/event', eventController.insertEvent );
    router.put('/event', eventController.updateEvent );
    router.delete('/event/:id_event', eventController.deleteEvent );
};