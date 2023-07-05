import { client } from "./databaseconnection.js";

export async function createNewRoom(room){
await client.db("hallBookingApp").collection("rooms").insertOne(room)
}

export async function bookNewRoom(newroom){
    await client.db("hallBookingApp").collection("booking").insertOne(newroom)
}
export async function getAllbookingDetails(){
  return  await client.db("hallBookingApp").collection("booking").find({}).toArray()
}

export async function getAllbookingDetailsOfSingleCustomer(name){
    return  await client.db("hallBookingApp").collection("booking").find({customerName:name}).toArray()
  }