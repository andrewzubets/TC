import crypto from "node:crypto"

export function hashPassword(password, salt){
    return crypto.pbkdf2Sync(password,
        salt, 310000, 32, 'sha256');
}

export function generateSalt(){
    return crypto.randomBytes(16).toString('hex')
}

export function isLoginPasswordsMatch(user, password) {
    const passwordHash = hashPassword(password, user.getSalt());
    const storedPasswordHash = Buffer.from(user.getPassword(), 'hex');
    return crypto.timingSafeEqual(passwordHash, storedPasswordHash);
}