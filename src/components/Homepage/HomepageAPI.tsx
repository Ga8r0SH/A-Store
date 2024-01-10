import { useEffect, useState, } from "react"
import Homepage from "./Homepage"
import { SearchUserInterface, Users } from "../../services/usersService/users-response.interface"
import { getUsers, searchingUserByData } from "../../services/usersService/usersService"
import { useParams, useSearchParams } from "react-router-dom";
import Preloader from "../navProduct/preloader/Preloader";
import { useNavigate } from "react-router-dom";


const HomepageAPI = () => {
    const [reloading, setReloading] = useState<boolean>(true);
    const [users, setUsers] = useState<Users | undefined>();
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchUser, setSearchUser] = useState<string | undefined>();
    const [usersBySearching, setUsersBySearching] = useState<SearchUserInterface[] | undefined>();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        setReloading(true);
        if (id) {
            getUsers(id)
                .then((data) => {
                    setUsers(data);
                    setReloading(false);
                });
        }
    }, [id]);

    const sendDataSearch = (query: string | undefined) => {
        if (query) {
            navigate(`?searchUser=${query}`);
            searchingUserByData(query)
                .then(data => {
                    setUsersBySearching(data);
                });
        }
    };

    useEffect(() => {
        const params = searchParams.get('searchUser')?.trim();
        if (params) {
            setSearchUser(params);
            sendDataSearch(params);
        }
    }, []);

    return (
        <div>
            {reloading ? <Preloader /> :
                <Homepage
                    users={users}
                    searchUser={searchUser}
                    setSearchUser={setSearchUser}
                    sendDataSearch={sendDataSearch}
                    usersBySearching={usersBySearching}
                />}
        </div>
    );
};

export default HomepageAPI;