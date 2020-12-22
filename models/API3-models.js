module.exports={ 
	fetch:function(user_id){
       query = "select video_id,count(video_id) from course_video_views where user_id=? group by video_id";
	   return query;
	}
}