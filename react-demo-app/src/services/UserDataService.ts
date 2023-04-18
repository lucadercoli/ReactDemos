import axios from "axios";
import User from "../models/User";

export default class UserDataService {
    private apiUrl: string = 'http://localhost:3013/users'; 

    async GetUsers(): Promise<User[]> {
        try {
            const result = await axios.get(
                this.apiUrl, 
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                });

            return result.data;
        } catch(err) {
            console.log(err);
            return [];
        }
    }

    async CreateUser(newUser: User): Promise<boolean> {
        try {
            const result = await axios.post(this.apiUrl, 
                JSON.stringify(newUser),
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                });

            return (result.status == 200 || result.status == 201);
        } catch(err) {
            console.log(err);
            return false;
        }
    }
}