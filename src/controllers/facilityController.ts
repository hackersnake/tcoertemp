import { Request, Response } from "express";
import Facility from "../models/facility";

// Create a new facility
export const createFacility = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const facility = await Facility.create(req.body);
        res
            .status(201)
            .json({ success: true, message: "Facility created successfully", data: facility });
    } catch (error) {
        res.status(400).json({ success: false, error: (error as Error).message });
    }
};

// Get all facilities
export const getAllFacilities = async (
    _req: Request,
    res: Response
): Promise<void> => {
    try {
        const facilities = await Facility.findAll();
        if (facilities.length > 0) {
            res
                .status(200)
                .json({
                    success: true,
                    message: "Facilities retrieved successfully",
                    data: facilities,
                });
        } else {
            res.json({ success: false, message: 'Records not found' })
        }

    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

// Get a single facility by ID
export const getFacilityById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const facility = await Facility.findByPk(req.params.id);
        if (facility) {
            res
                .status(200)
                .json({ success: true, message: "Facility retrieved successfully", data: facility });
        } else {
            res.status(404).json({ success: false, error: "Facility not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: (error as Error).message });
    }
};

// Update a facility by ID
export const updateFacility = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const facility = await Facility.findByPk(req.params.id);
        if (facility) {
            await facility.update(req.body);
            res
                .status(200)
                .json({ success: true, message: "Facility updated successfully", data: facility });
        } else {
            res.status(404).json({ success: false, error: "Facility not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: (error as Error).message });
    }
};

// Delete a facility by ID
export const deleteFacility = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const facility = await Facility.findByPk(req.params.id);
        if (facility) {
            await facility.destroy();
            res.status(200).json({ success: true, message: "Facility deleted successfully" });
        } else {
            res.status(404).json({ success: false, error: "Facility not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: (error as Error).message });
    }
};
