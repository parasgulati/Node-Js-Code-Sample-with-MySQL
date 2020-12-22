var API3_models = require('../models/API3-models.js');
var connection = require ('../app.js');
var express = require('express');
var connection = require('../database.js');

module.exports={
	fetch:function(req,res){
		var post=req.body;
		const query = API3_models.fetch();
		connection.query(query,[post.user_id], function (err, rows, fields) {
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
					course_videos_views:rows
				}).send();
			}
		});
	}
}