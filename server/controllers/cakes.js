const Cakes = require('../model/cake')

module.exports = {
    getAll: async function (req, res) {
        const cakes = await Cakes.find();
        res.json(cakes)
    },

    getById: async function (req,res) {
        const id  = req.params.id;
        Cakes.find({_id: id})
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err))
    },

    createNew: async function (req, res) {
        const body = req.body;
        const cakes = new Cakes(body);
        cakes.save()
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err))
    },

    update: async function (req, res) {
        const body = req.body;
        const id = req.params.id;
        // console.log('Api input:' + body._id + '|'+ body.title  + '|'+ body.description  + '|'+ body.completed);

        Cakes.findOneAndUpdate({_id: id}, {userName:body.userName, comment:body.comment, stars: body.stars, cakeImg:body.cakeImg}, function(err, cakes){
            if (err) {
                res.json(err)     
            } else {
                console.log(`Api input:  ${cakes}`)
                res.json(cakes);
            }
        }    
        );
            
    },

    delete: async function (req, res) {
        const id = req.params.id;
        Cakes.deleteOne({ _id: id })
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    }
};