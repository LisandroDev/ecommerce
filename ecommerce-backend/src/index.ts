import express from 'express';
import imagesRouter from './routes/images';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());



const PORT = 3003;

app.use('/images', imagesRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})