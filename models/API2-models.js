module.exports={
  createUser:function(){
    query= "INSERT INTO data_user(email,first_name,last_name,password) VALUES (?,?,?,?)";
	return query; 
  },
  checkUserExists:function()
  {
	  query = "SELECT id,first_name,last_name FROM data_user WHERE email=? and password=?";
	  return query;
  }	
}