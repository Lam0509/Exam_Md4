import mongoose from 'mongoose';

let database = {
    connect: () => {
        mongoose.set('strictQuery', false);
        mongoose.connect('mongodb://0.0.0.0:27017/test')
            .then(() => console.log('DB Connected!'))
            .catch(error => console.log('DB connection error:', error.message));
    }
}
export default database;