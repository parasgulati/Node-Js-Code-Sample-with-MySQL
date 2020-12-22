var API2_models = require('../models/API2-models.js');
var connection = require ('../app.js');
var express = require('express');
var connection = require('../database.js');

module.exports={
	createUser:function(req,res){
		var post=req.body;
		const query = API2_models.createUser();
		connection.query(query,[post.email,post.first_name,post.last_name,post.password],function (err, rows, fields) {
		    if (err)
		    {
				res.status(502).json({
					message:'Bad Gateway',
					error:err
				}).send();
			}
			else
			{	
				res.status(200).json({
					message:'Success',
					id:rows.insertId
				}).send();
			}
		});
	},

	login:function(req,res){
		var post= req.body;
		const query = API2_models.checkUserExists();
		connection.query(query,[post.email,post.password],function(err,rows,fields)
		{
			if (err)
		    {
				res.status(502).json({
					message:'Bad Gateway',
					error:err
				}).send();
			}
			else
			{	
				if(rows.length==1)
				{
					var row = JSON.parse(JSON.stringify(rows[0]));
					
					res.status(200).json({
						message:'Success',
						user_id:row.id,
						first_name:row.first_name,
						last_name:row.last_name
					}).send();
				}
				else
				{
					res.status(404).json({
						message:'Not Found'
					}).send();
				}
			}
		});
	}

}