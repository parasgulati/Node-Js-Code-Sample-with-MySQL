var API1_models = require('../models/API1-models.js');
var express = require('express');
var connection = require('../database.js');
var mysql = require('mysql')

module.exports={
	
	Fetch:function(req,res){
		
		const query = API1_models.Fetch();

		connection.query(query,[req.body.user_id,req.body.type],function (err, rows, fields) {
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
					course_videos:rows
				}).send();
			}
		});
	}
}