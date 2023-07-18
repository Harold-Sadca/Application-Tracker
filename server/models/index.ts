import mongoose, { ConnectOptions } from 'mongoose'

main().catch(err => console.log(err));

async function main () {

  await mongoose.connect('mongodb://127.0.0.1:27017/meal-roulette', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  } as ConnectOptions);
  console.log('server up')
}

export default mongoose