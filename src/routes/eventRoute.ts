import { Router } from 'express';
import * as EventController from '../controllers/eventController';

// Initialize the router
const router: Router = Router();

// Define the routes
router.get('/getAllEvents', EventController.getAllEvents);

router.post('/addEvent', EventController.addEvent);

router.get('/getEventById/:id', EventController.getEventById);

router.put('/updateEvent/:id', EventController.updateEvent);

router.delete('/deleteEvent/:id', EventController.deleteEvent);

// Export the router
export default router;
