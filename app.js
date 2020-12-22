const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const API=express();
require('dotenv/config');

var API1 = require('./routes/API1-routes.js');
var API2 = require('./routes/API2-routes.js');
var API3 = require('./routes/API3-routes.js');

API.use(cors());
API.use(bodyParser.json());
API.use(bodyParser.urlencoded({extended: false}));

// Authorize API Key
function Authorize(req,res,next)
{
	if(req.body.API_KEY==process.env.API_KEY)
		next();
	else
	{
		res.status(401).json({
			message:"Unauthorized"
		}).send();
	}
}

// Validate first_name, last_name and password for login
function Validate(req,res,next)
{
	var first_name = req.body.firstname;
	var last_name = req.body.lastname;
	var password = req.body.password;
	
	var name_pattern = /[^A-Za-z]/;
	var password_pattern = /[^A-Za-z0-9@_]/
	
	if(name_pattern.test(first_name) || name_pattern.test(last_name) || password_pattern.test(password))
	{
		res.status(406).json({
			message:"Not Acceptable"
		}).send();
	}
	else
		next();
}


API.use('/API1',Authorize,API1);
API.use('/API2',Authorize,Validate,API2);
API.use('/API3',Authorize,API3);

const port = process.env.PORT | 3000;
API.listen(port);