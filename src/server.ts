import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 8888;

const app = express();

app.listen(port, () => console.log('app started'));
