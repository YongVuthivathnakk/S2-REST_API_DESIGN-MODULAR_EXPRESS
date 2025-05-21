import express from "express";
import {getAllUsers, getUserById, createUser, updateUser, deleteUser} from "../controllers/userControllers.js";
import validateUser from "../middleware/validateUser.js";

const router = express.Router();


// GET /users - List all users (get all users)
 
router.get('/', getAllUsers);

// GET /users/:id - Get one user (get user By ID)

router.get('/:id', getUserById);

// POST /users - Create new user

router.post('/', validateUser, createUser);

// PUT /users/:id - Update user

router.put('/:id', updateUser);

// DELETE /users/:id - Delete user

router.delete('/:id', deleteUser);

export default router;

