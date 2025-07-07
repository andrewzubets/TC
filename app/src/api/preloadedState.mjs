import {getUserModelResponse} from "../modules/users/api/response.mjs";
import UserModel from "../modules/users/models/UserModel.mjs";

function getGuestUser(){
    return {
        id: null,
        email: null,
        role: 'guest',
        is_auth: false
    }
}

async function getCurrentUser(userId) {
    if (!userId) {
        return getGuestUser()
    }
    return getUserModelResponse(await UserModel.findOneById(userId));
}

export async function getPreloadedState(req) {
    return {
        auth: {
            user: await getCurrentUser(req.user?.id)
        }
    }
}