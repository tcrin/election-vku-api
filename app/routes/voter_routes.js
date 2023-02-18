module.exports = function(router){
    var voterController = require('../controllers/voter_controller');
    router.get('/voter', voterController.getAllVoter );
    router.get('/voter-sign-in', voterController.getVoterSignIn );
    router.post("/voter", voterController.insertVoter);
    router.put("/voter", voterController.updateVoter);
    router.put("/voter/:id_voter", voterController.updateVoterIsCandidate)
    router.delete("/voter/:uid", voterController.deleteVoter)
    //router.get('/voter-sign-in/:uid', voterController.getVoterAndSignInByUid);
    router.get('/voter/:uid', voterController.getVoterByUid);
};