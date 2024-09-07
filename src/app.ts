import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db'; // Adjust the path as needed
import facilityRoutes from './routes/facilityRoutes';
import eventRoutes from './routes/eventRoute'; // Corrected the import path

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route setup
app.use('/facilities', facilityRoutes);
app.use('/events', eventRoutes); // Adjusted route path to be consistent

// Define the home page route
app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to the NVCTI Dashboard API');
});

// Define the test endpoint
app.get('/testing', (_req: Request, res: Response) => {
  res.send('Testing endpoint is working!');
});

const PORT = process.env.PORT || 4000;

sequelize.sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });
