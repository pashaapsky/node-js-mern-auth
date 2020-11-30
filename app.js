const express = require('express');
const cors = require('cors');
const config = require('config');
const bodyParser = require('body-parser');

// список роутов для маршрута /api/auth + routes
const authRoutes = require('./routes/auth.routes');

const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

const PORT = config.get('port') || 5000;

async function start() {
   try {
      await mongoose.connect(config.get('mongoUri'), {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false,
         useCreateIndex: true
      });

      app.listen(PORT, () => {
         console.log(`app has been started on port ${PORT}`);
      });
   } catch (e) {
      console.log('Server error', e.message);
      process.exit();
   }
}

start();

