const pool=require('../pool.js');
const express=require('express');
var router=express.Router();
router.get('/check',(req,res)=>{
   var uname=req.query.uname
	if(!uname){
   res.send('用户名为空')
   return;
   }
   var sql='select * from mjl_user where uname=?'
   pool.query(sql,[uname],(err,result)=>{
   if(err) throw err
	if(result.length>0){
    res.send('0')
   }else{res.send('1')}
   })
})
router.post('/register',(req,res)=>{
   var uname=req.body.uname;
   var upwd=req.body.upwd
   var phone=req.body.phone
	if(!uname){
    res.send('用户名为空')
	return;
   }
	if(!upwd){
	res.send('密码为空')
	return;
	}
	var sql='insert into mjl_user values(null,?,?,?)'
	pool.query(sql,[uname,phone,upwd],(err,result)=>{
	if(err) throw err
	res.send('1')
	})
   })
   router.post('/login',(req,res)=>{
	var uname=req.body.uname;
   var upwd=req.body.upwd
	if(!uname){
    res.send('用户名为空')
	return;
   }
	if(!upwd){
	res.send('密码为空')
	return;
	}
	var sql='select * from mjl_user where uname=? and upwd=?'
	pool.query(sql,[uname,upwd],(err,result)=>{
	if (err) throw err
	if(result.length>0){
	res.send('登录成功')
	}else{res.send('登录失败')}
    })
	})

module.exports=router;