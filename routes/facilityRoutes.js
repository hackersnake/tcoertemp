"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const facilityController_1 = require("../controllers/facilityController");
const router = express_1.default.Router();
// Create a new facility
// router.post('/', (req: Request, res: Response) => createFacility(req, res));
// Get all facilities
router.get('/', (req, res) => (0, facilityController_1.getAllFacilities)(req, res));
// Get a single facility by ID
// router.get('/:id', (req: Request, res: Response) => getFacilityById(req, res));
// Update a facility by ID
// router.put('/:id', (req: Request, res: Response) => updateFacility(req, res));
// Delete a facility by ID
// router.delete('/:id', (req: Request, res: Response) => deleteFacility(req, res));
exports.default = router;
//# sourceMappingURL=facilityRoutes.js.map