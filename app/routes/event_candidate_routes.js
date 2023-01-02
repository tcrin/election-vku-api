module.exports = function(router){
    var eventCandidateController = require('../controllers/event_candidate_controller');
    router.get('/event-candidate', eventCandidateController.getAllEventCandidate );
    router.post("/event-candidate", eventCandidateController.insertEventCandidate);
    router.get("/info-event", eventCandidateController.getInfoEvent);
    router.get("/info-all-event",eventCandidateController.getInfoAllEvent);
};