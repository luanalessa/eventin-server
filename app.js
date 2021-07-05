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
const readUserEvents = require("./functions/readUserEvents.js");
const deleteEvent = require("./functions/deleteEvent.js");
const deleteUser = require("./functions/deleteUser.js");
const submitEvent = require("./functions/submitEvent");
const createTicket = require("./functions/createTicket");
const readTickets = require("./functions/readTickets.js");
const readTicket = require("./functions/readTicket.js");
const delEvent = require("./functions/delEvent");
const updateTicket = require("./functions/updateTicket.js");

startDatabase();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://192.168.15.11:3000", "http://localhost:3000"],
  })
);

app.get("/users", readUser);
app.post("/users", createUser);
app.delete("/users", deleteUser);
app.post("/attendants", createAttendant);
app.post("/login", login);
app.post("/logout", logout);
app.post("/events", createEvent);
app.get("/events", readEvents);
app.get("/events/:id", readUserEvents);
app.delete("/events", deleteEvent);
app.put(`/submit/:username&:eventId`, submitEvent);
app.post("/tickets", createTicket);
app.get("/tickets", readTickets);
app.get("/ticket", readTicket);
app.put(`/del/:username&:eventId`, delEvent);
app.put("/ticket", updateTicket);

app.listen(3333);
