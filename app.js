const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const { startDatabase, db } = require("./database");
const checkAuthentication = require("./middlewares/checkAuthentication");
const readUser = require("./functions/readUser.js");
const createUser = require("./functions/createUser.js");
const createAttendant = require("./functions/createAttendant.js");
const createEvent = require("./functions/createEvent.js");
const login = require("./functions/login.js");
const logout = require("./functions/logout.js");
const readEvents = require("./functions/readEvents.js");
const deleteEvent = require("./functions/deleteEvent.js");
const deleteUser = require("./functions/deleteUser.js");
const submitEvent = require("./functions/submitEvent");
const createTicket = require("./functions/createTicket");
const readTickets = require("./functions/readTickets.js");

startDatabase();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/users", readUser);
app.post("/users", createUser);
app.delete("/users", deleteUser);
app.post("/attendants", createAttendant);
app.post("/login", login);
app.post("/logout", logout);
app.post("/events", createEvent);
app.get("/events", readEvents);
app.delete("/events", deleteEvent);
app.put(`/submit/:username&:eventId`, submitEvent);
app.post("/tickets", createTicket);
app.get("/tickets", readTickets);

app.listen(3333);
