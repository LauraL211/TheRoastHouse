const mongoose = require('mongoose');
const dbURI = "mongodb+srv://lollylooney:Gads1858@cluster0.2sjgu.mongodb.net/?retryWrites=true&w=majority&appName=TheRoastHouse";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}//require('./locations');

const recipeSchema = new mongoose.Schema({
  Name: String,
  Time: String,
  Serves: String,
  Difficulty: String
});

mongoose.model('Recipe', recipeSchema);