const PirateController = require('../controllers/pirate.controller');
module.exports = function(app){
    app.get('/api', PirateController.index);
    app.post('/api/pirate', PirateController.createPirate);
    app.get('/api/pirates', PirateController.getAllPirates);
    app.get('/api/pirate/:id', PirateController.getPirate);
    app.patch('/api/pirate/:id/edit', PirateController.updatePirate);
    app.delete('/api/pirate/:id/delete', PirateController.deletePirate);
}