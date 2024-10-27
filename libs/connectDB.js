import { MongoClient, ServerApiVersion } from "mongodb";
let db;
export const connectDB =async()=>{
    if(db) return db;
    try {
        const uri = process.env.MONGODB_URI
        const client = new MongoClient(uri,{
            serverApi:{
                version: ServerApiVersion.v1,
                strict:true,
                deprecationErrors:true,
            },
        });
    // await client.connect();
     db= client.db('crud-oparetion')
     return db;     

    } catch (error) {
        console.log(error);
    }
};