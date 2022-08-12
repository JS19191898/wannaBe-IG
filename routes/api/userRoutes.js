const router = require("express").Router();
const {
    getOne,
    getAll,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require("../../controllers/user-controller");

router.route("/").get(getAll).post(createUser);

router.route("/:id").get(getOne).put(updateUser).delete(deleteUser);

router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;