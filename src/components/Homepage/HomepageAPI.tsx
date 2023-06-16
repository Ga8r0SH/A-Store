import { useEffect, useState } from "react"
import Homepage from "./Homepage"
import { Users } from "../../services/usersService/users-response.interface"
import { getUsers } from "../../services/usersService/usersService"
import { useParams } from "react-router-dom";



const HomepageAPI = () => {
    const [users, setUsers] = useState<Users>();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getUsers(id)
                .then((data) => {
                    setUsers(data)
                })
        }
    }, [id])


    return (
        <div>
            <Homepage
                users={users}
            />
        </div>
    )
}
export default HomepageAPI;