let db = require('../models');
let moment = require('moment-timezone');

module.exports = function(app) {
    app.get('/sethours', (req, res) => {
        res.render('set-hours');
    });
    app.get('/addservice', (req, res) => {
        res.render('add-service');
    })

    app.post('/clientaddservice', (req, res) => {
        let svcName = req.body.svcName;
        let maxSimul= req.body.maxSimul;
        let duration = req.body.svcDur;

        db.Service.create({
            name: svcName, 
            max_simul: maxSimul, 
            duration: duration
        })
    })
}
