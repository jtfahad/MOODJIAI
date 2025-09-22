import mongoose from "mongoose";

// extending the global namespace to include mongoose connection object
// this is to prevent multiple connections in development mode due to hot reloading
// we use a global variable to store the connection
declare global{
    var mongooseConnection: {
        conn: mongoose.Connection | null;
        promise: Promise<mongoose.Connection> | null;
    } | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI || "";

if(!MONGODB_URI){
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// cached connection variable
// let cached = global.mongooseConnection;

// checking if there is no cached connection initialize the mongoose connection object within global scope
// if(!cached){
//     cached = global.mongooseConnection = { conn: null, promise: null };
// }

let cached: {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
} = global.mongooseConnection ?? { conn: null, promise: null };

global.mongooseConnection = cached;


// function to connect to the database
const connectDB = async () => {
    // return the cached connection if it exists
    if(cached.conn){
        return cached.conn;
    }
    
    // if no connection is established, create a new connection
    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose.connection;
        });
    }

    // awaiting the promise to resolve and store the connection
    try{
        cached.conn = await cached.promise;
    }catch(err){
        cached.promise = null;
        throw err;
    }

    // return the established connection
    return cached.conn;
}

export default connectDB;