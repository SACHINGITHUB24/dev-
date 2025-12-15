import mongoose from 'mongoose'


const mongodb_uri = process.env.MONGODB_URI


if(!mongodb_uri){
    throw new Error("Pleasee define MONGODB_URI in .env.local")
}

let cached = global.mongoose


if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

export async function dbConnect() {
    if(cached.conn) return cached.conn

    if(!cached.promise){
        cached.mongoose = mongoose.connect(mongodb_uri, {
            bufferCommands: false,
        })
    }
    
    cached.conn = await cached.promise
    return cached.conn
}