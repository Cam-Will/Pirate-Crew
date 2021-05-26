const { Pirate } = require("../models/pirate.model");

module.exports.index = (request, response) => {
    response.json({
       message: "Pirate Crew Belt Exam"
    });
}
module.exports.createPirate = (request, response) => {
        const { pirateName, treasureChests, pegLeg, eyePatch, hookHand, imageUrl, catchPhrase, position } = request.body;
        Pirate.create({
            pirateName,
            treasureChests,
            pegLeg,
            eyePatch,
            hookHand,
            imageUrl,
            catchPhrase,
            position
        })
            .then(Pirate => response.json(Pirate))
            .catch(err => response.json(err));
    }
    module.exports.getAllPirates = (request, response) => {
        Pirate.find({}).sort({pirateName: 1})
            .then(Pirates => response.json(Pirates))
            .catch(err => response.json(err))
    }
    module.exports.getPirate = (request, response) => {
        Pirate.findOne({_id:request.params.id})
            .then(Pirate => response.json(Pirate))
            .catch(err => response.json(err))
    }
    module.exports.updatePirate = (request, response) => {
        Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
            .then(updatedPirate=> response.json(updatedPirate))
            .catch(err => response.json(err))
    }
    module.exports.deletePirate = (request, response) => {
        Pirate.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }