require('dotenv').config();
const express = require('express');
const schoolRoutes = require('./routes/schoolRoutes');
const cors = require("cors");
const morgan = require('morgan');
const PORT = process.env.PORT || 3000; 



const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));



app.use('/', schoolRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
