const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const faqRoutes = require('./routes/faqRoutes');
const loginRoutes=require('./routes/loginRoutes')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/fruitai', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


  app.use('/api/login', loginRoutes);
app.use('/api/faqs', faqRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
