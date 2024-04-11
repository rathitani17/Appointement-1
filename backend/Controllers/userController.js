import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: "User updated successfully", data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });

    }
};
export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndDelete(
            id,
             { $set: req.body },
              { new: true });
        res
        .status(200)
        .json({
             success: true,
              message: "Successfully deleted "});
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });

    }
};
export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const user=await User.findById(id).select("-password");
        return res.status(200)
        .json({
             success: true,
              message: "User found",
              data: user,
            });
    } catch (error) {
        res.status(404).json({ success: false, message: "No user found" });

    }
};
export const getAllUser = async (req, res) => {
    
    try {
        const user=await User.find({}).select("-password");
        res.status(200)
        .json({
             success: true,
              message: "Users found",
              data: user,
            });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });

    }
};