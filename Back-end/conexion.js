const mongosee = require('mongoose')
mongosee.connect('mongodb+srv://Root:Aasoei142_@bd.jsh1x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('connected to', db.connection.host))
    .catch(err => console.error(err))