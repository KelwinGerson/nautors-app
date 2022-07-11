const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));


// SCHEMA → DESCRIPTION, DEFAULTS VALUES AND VALIDATION ABOUT DATA
// const tourSchema = new mongoose.Schema({
//   //FIELDS
//   name: {
//     type: String,
//     required: [true,'A tour must have a name'], // validator. Second argument is a message error
//     unique: true
//   },
//   rating: {
//     type: Number,
//     default: 4.5 
//   },
//   price: {
//     type: Number,
//     required: [true, 'A tour must have a price']
//   }
// });

// const Tours = mongoose.model('Tours', tourSchema);

// // TESTING CRUD OPERATION WITH DATABASE
// const testTour = new Tours({
//   name: 'Santo Amaro',
//   rating: 5,
//   price: 20
// });

// testTour
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log('ERROR!', err);
//   });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
