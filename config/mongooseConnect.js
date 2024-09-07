import mongoose from 'mongoose'
const mongooseConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        await mongoose.connect('mongodb+srv://idreesadam200:iredox@cluster0.jcxb8on.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('mongoose connected')
    }catch(err){
        console.log(err)
    }
}

export default mongooseConnect