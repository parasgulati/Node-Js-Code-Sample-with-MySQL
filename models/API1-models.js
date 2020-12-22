module.exports={
	Fetch:function(){
       return "select * from course_videos where course_id in (select item_id from user_subscriptions where user_id=? and type=?)";
	}
}