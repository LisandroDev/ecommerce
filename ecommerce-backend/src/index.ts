import express from 'express';
import imagesRouter from './routes/images';
import productsRouter from './routes/products'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());



const PORT = 3003;

app.use(express.static('build'))
app.use('/images', imagesRouter)
app.use('/products', productsRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


module.exports = app;