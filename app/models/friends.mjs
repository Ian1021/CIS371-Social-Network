/*
* Group: Francis Corona, Ian Stewart
* Project: Social Network - Phase 3
* Due: 6/11/24, 11:59 PM EDT
*/

import mongoose from 'mongoose';

// Define the post schema
const friendsSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

// Create a post model using the schema
const friends = mongoose.model('Friends', friendsSchema);

export default friends;