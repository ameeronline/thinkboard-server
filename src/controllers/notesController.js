import Note from "../../models/Note.js";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
        
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error"});
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newNote = new Note({title, description});

        await newNote.save();
        res.status(201).json({message: "Note created successfully", note: newNote});

    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ message: "Internal server error"});
    }
}

export const updateNote = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} updated successfully`);
}

export const deleteNote = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} deleted successfully`);
}