const express = require('express')
// import {MongoClient} from 'mongodb'
// import assert from 'asser'
// import config from '../config'

// let mdb;

// MongoClient.connect(config.mongodbUri, (err, db) => {
// 	assert.equal(null, err);

	
// 	mdb = db;
// })
const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.set('views', __dirname +'/views')

app.set('view engine', 'pug')

app.get('*', function(req, res){
	res.render('index')
})

app.listen(process.env.PORT || 3000, function(){
	console.log('listening to port 3000')
})