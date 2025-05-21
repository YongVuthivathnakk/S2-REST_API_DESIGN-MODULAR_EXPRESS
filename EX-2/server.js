import express from 'express';
import logger from './middleware/logger.js';
import articleRoutes from './routes/articleRoutes.js';
import journalistRoutes from './routes/journalistRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();
app.use(express.json());
app.use(logger);

app.use('/articles', articleRoutes);
app.use('/journalists', journalistRoutes);
app.use('/categories', categoryRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
    