const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGOURL).then(()=>console.log(`Connected mongodb`)).catch(e=>console.log(e));