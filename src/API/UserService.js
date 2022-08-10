export default class UserService {
    static async getAllUsers(url) {
        const response = await fetch(url)
        return response.json()
    }
}
