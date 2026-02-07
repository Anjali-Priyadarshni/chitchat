 const CHECK_USER_BY_EMAIL_SQL = `select * from user_details where email_id =?`
 const INSERT_USER_SQL = `INSERT INTO user_details (name, email_id, phone_no, password,active,created_time,token,role)
   VALUES (?, ?, ?, ?,?,?,?,?)`;
 const INSERT_POST = 'INSERT INTO post(user_id,post,created_time) VALUES(?,?,?)';
 const GET_DATA_SQL = 'select * from user_details';
 const SET_ACTIVE = "update user_details set active = 0  where email_id =?";  
 const POST_DATA = "SELECT * FROM post where user_id=? order by created_time desc";

   module.exports = { CHECK_USER_BY_EMAIL_SQL, INSERT_USER_SQL,GET_DATA_SQL,SET_ACTIVE,POST_DATA,INSERT_POST };