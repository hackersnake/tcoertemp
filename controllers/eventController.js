"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEvent = exports.getAllEvents = void 0;
const event_1 = __importDefault(require("../models/event"));
// Get all events
const getAllEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield event_1.default.findAll();
        res.status(200).json(events);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getAllEvents = getAllEvents;
// Add a new event
const addEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield event_1.default.create(req.body);
        res.status(201).json(event);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.addEvent = addEvent;
//# sourceMappingURL=eventController.js.map