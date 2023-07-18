import mongoose, { ConnectOptions } from 'mongoose'

main().catch(err => console.log(err));

async function main () {

  await mongoose.connect('mongodb://127.0.0.1:27017/application-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  } as ConnectOptions);
  console.log('database up')
}

export default mongoose