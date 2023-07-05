import express from "express"
import { bookNewRoom, createNewRoom, getAllbookingDetails, getAllbookingDetailsOfSingleCustomer } from "./databaseQuerres.js"

const router=express.Router()

router.get("/",async (req,res)=>{
    try {
        res.status(200).send("app working fine")
    } catch (error) {
        res.status(500).send("app not working fine")
    }
  
})

router.post("/new/room",async (req,res)=>{
    try {
        const room =req.body
        await createNewRoom(room)
        res.status(200).send("new room created in database")
    } catch (error) {
        res.status(500).send("some error occured while creating a room")
    }
})

router.post("/new/room/booking",async (req,res)=>{
    try {
        const bookingDetails =req.body
        await bookNewRoom(bookingDetails)
        res.status(200).send("room booked")
    } catch (error) {
        res.status(500).send("some error occured while booking a room")
    }
})


router.get("/booking/details",async (req,res)=>{
    try {
        const bookingDetails=await getAllbookingDetails()
        res.status(200).send(bookingDetails)
    } catch (error) {
        res.status(500).send("some error occured while booking a room")
    }
})

router.get("/customer/bookingDetails/:name",async (req,res)=>{
    try {
        const {name}=req.params
        const bookingDetails=await getAllbookingDetailsOfSingleCustomer(name)
        res.status(200).send(bookingDetails)
    } catch (error) {
        res.status(500).send("some error occured while booking a room")
    }
})


export const hallRouter=router