import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors()); 

// Routes 
app.use('/api', userRoutes)

// Error handling middleware

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
