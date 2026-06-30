const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log("Server running");
});

const Student = require("./models/studentSchema.js");

app.post("/students", async (req, res) => {

    try {

        const student = await Student.create(req.body);

        res.status(201).json(student);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

app.get("/students", async (req, res) => {

    const students = await Student.find();

    res.json(students);

});

app.get("/student/:id", async (req, res) => {

    const students = await Student.findById(req.params.id);

    res.status(200).json(students);

});

app.put("/students/:id", async (req, res) => {

    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(student);

});

app.delete("/students/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.json({
        message: "Student deleted"
    });

});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is runing on http://localhost:${PORT}`)
});