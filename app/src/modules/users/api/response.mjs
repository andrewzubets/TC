import UserModel from "../models/UserModel.mjs";
import moment from "moment";

export function getUserModelResponse(user) {

    if(user instanceof UserModel){
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            active: user.active,
            role: user.role,
            is_auth: true,
            created_at: user.created_at,
            updated_at: user.updated_at,
        }
    }
    return null
}