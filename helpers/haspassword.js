import bcrypt from 'bcrypt'


export const hasspassword = async (password) => {
    let saltRound = 10
    let generateSalt = await bcrypt.genSalt(saltRound)
    return await bcrypt.hash(password,generateSalt)
}

export const compareHashedPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

