const express =require('express')

const logcntrl= require('../controller/Login_control')

const router=express.Router()
router.post("/userId",logcntrl.userId)
router.post("/sign",logcntrl.SignUp)
router.post("/login",logcntrl.LoginID)
router.post("/rooms",logcntrl.createRooms)
router.post("/BRooms",logcntrl.createBRooms)
router.post("/joinRoom",logcntrl.joinRoom)
router.post("/getrooms",logcntrl.getRooms)
router.post("/deleterooms",logcntrl.deleteRoom)

module.exports=router

