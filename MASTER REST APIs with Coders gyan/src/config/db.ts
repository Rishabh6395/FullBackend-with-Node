import mongoose from 'mongoose';
import { config } from './config';


const connectDB = async() => {
    try {
    
        mongoose.connection.on('connected', () => {
            console.log("Connected to DB successfully")
        })

        mongoose.connection.on('error', (error) => {
            console.log('Error in connecting to db', error)
        })

        await mongoose.connect(config.databaseURL as string);

    } catch (error) {
        console.error("Failed to connect database", error)
        process.exit(1)
    }
}

export default connectDB;