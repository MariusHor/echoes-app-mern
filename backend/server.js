// Imports
import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { dbConfig } from './config/dbConfig.js';

// App config
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());

// Database
dbConfig();

// API Endpoints

// Listener
app.listen(port, () => console.log(`Listening on port ${port}`));
