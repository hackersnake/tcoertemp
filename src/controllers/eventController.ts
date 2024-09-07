import { Request, Response } from 'express';
import Event from '../models/event';

// Get all events
const getAllEvents = async (_req: Request, res: Response): Promise<void> => {
    try {
        const events = await Event.findAll();
        if (events.length > 0) {
            res.status(200)
                .json({
                    success: true,
                    message: "Events retrieved successfully",
                    data: events,
                });
        } else {
            res.json({ success: false, message: 'Records not found' })
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
};

// Add a new event
const addEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const event = await Event.create(req.body);
        res.status(201)
            .json({
                success: true,
                message: "Event created successfully",
                data: event,
            });
    } catch (error) {
        if (!res.headersSent) {
            res.status(400).json({ success: false, error: (error as Error).message });
        }
    }
};

// Get event by id
const getEventById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id); // Parsing to integer
        const event = await Event.findOne({ where: { event_id: id } });
        if (event) {
            res.status(200)
            .json({ success: true, message: "Event retrieved successfully", data: event });
        } else {
            res.status(404).json({ success: false, error: 'Event not found' });
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }
};

// Update an event
const updateEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id); // Parsing to integer
        const event = await Event.findByPk(id);
        if (event) {
            await event.update(req.body);
            res.status(200)
                .json({ success: true, message: "Event updated successfully", data: event });
        } else {
            res.status(404).json({ success: false, error: 'Event not found' });
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(400).json({ success: false, error: (error as Error).message });
        }
    }
};

// Delete an event
const deleteEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id); // Parsing to integer
        const event = await Event.findByPk(id);
        if (event) {
            await event.destroy();
            res.status(200).json({ success: true, message: 'Event deleted successfully' });
        } else {
            res.status(404).json({ success: false, error: 'Event not found' });
        }
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }
};

export { getAllEvents, addEvent, getEventById, updateEvent, deleteEvent };
