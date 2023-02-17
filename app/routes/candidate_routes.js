module.exports = function(router){
    var candidateController = require('../controllers/candidate_controller');
    router.get('/candidate', candidateController.getAllCandidate );
    router.post("/candidate", candidateController.insertCandidate);
    router.put("/candidate", candidateController.updateCandidate);
    router.delete("/candidate/:idCandidate", candidateController.deleteCandidate)
    //router.get('/voter-sign-in/:uid', voterController.getVoterAndSignInByUid);
    router.get('/candidate/:idCandidate', candidateController.getCandidateByUid);
    router.get('/get-student', candidateController.getStudent);
};