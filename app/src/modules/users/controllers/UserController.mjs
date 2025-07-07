import {authorizeJsonRequest} from "../api/auth.mjs";
import {getUserModelResponse} from "../api/response.mjs";
import UserModel from "../models/UserModel.mjs";
import router from "../routes/authRouter.mjs";

const getUserHandler = async (req, res) => {
    const currentId = req.user.id;
    const currentRole = req.user.role;

    let requestedUserId = parseInt(req.params.id);
    if(!requestedUserId){
        requestedUserId = currentId
    }
    const isOwner = currentId === requestedUserId
    const isAdmin = currentRole === 'admin'

    if (!isOwner && !isAdmin) {
        return res.json({
            success: false,
            code: 'cant_view_other_user'
        })
    }
    return res.json({
        success: true,
        is_owner: isOwner,
        is_admin: isAdmin,
        user: getUserModelResponse(await UserModel.findOneById(requestedUserId))
    })
}

export {
    getUserHandler
}