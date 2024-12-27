import mongoose from "mongoose";

const pageSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Page name
    data: {
        heroContent: {
            title: { type: String, required: true }, // Hero section title
            description: [{ type: String }], // Array of descriptions
        },
        title: { type: String, required: true }, // Page title
        sections: [{ type: Object }], // Array of sections
    },
});

export default mongoose.model("Page", pageSchema);
