import http from "../http-common";

class UserService {
    login(data) {
        return http.post("/signIn", data)
    }
    getAllUsers() {
        return http.get("/user")
    }

    createUser(data) {
        return http.post("/user",data)
    }
    updateUser(id,data) {
        return http.put(`/user/${id}`,data)
    }
    deleteUser(id) {
        return http.delete(`/user/${id}`)
    }
}
export default new UserService();