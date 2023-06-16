import { useEffect, useState } from "react"
import Homepage from "./Homepage"
import { Users } from "../../services/usersService/users-response.interface"
import { getUsers } from "../../services/usersService/usersService"
import { useParams } from "react-router-dom";
import Preloader from "../navProduct/preloader/Preloader";

const HomepageAPI = () => {
    const [reloading, setReloading] = useState<boolean>(true);
    const [users, setUsers] = useState<Users>();
    const { id } = useParams();

    useEffect(() => {
        setReloading(true)
        if (id) {
            getUsers(id)
                .then((data) => {
                    setUsers(data)
                    setReloading(false)
                })
        }
    }, [id])

    return (
        <div>
            {reloading ? <Preloader /> :
                <Homepage
                    users={users}
                />}
        </div>
    )
}
export default HomepageAPI;