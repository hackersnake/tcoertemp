import express, { Request, Response, Router } from 'express';
import {
    createFacility,
    getAllFacilities,
    getFacilityById,
    updateFacility,
    deleteFacility
} from '../controllers/facilityController';

const router: Router = express.Router();

// Create a new facility
router.post('/addFacility', (req: Request, res: Response) => createFacility(req, res));

// Get all facilities
router.get('/getAllFacilities', (req: Request, res: Response) => getAllFacilities(req, res));

// Get a single facility by ID
router.get('/getFacilityById/:id', (req: Request, res: Response) => getFacilityById(req, res));

// Update a facility by ID
router.put('/updateFacility/:id', (req: Request, res: Response) => updateFacility(req, res));

// Delete a facility by ID
router.delete('/deleteFacility/:id', (req: Request, res: Response) => deleteFacility(req, res));

export default router;
