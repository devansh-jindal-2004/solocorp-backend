import Page from "../model/page.model.js"; // Import your Mongoose model

export const page = async (req, res) => {
    const { page } = req.params; // Extract the 'page' parameter from the request URL

    try {
        // Find the document in the database where the 'name' field matches the 'page' parameter
        const result = await Page.findOne({ name: page });

        if (!result) {
            return res.status(200).json({ message: "Page not found" }); // If no page is found
        }

        res.status(200).json(result.data); // Send the retrieved page data
    } catch (error) {
        // Handle any potential errors
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
