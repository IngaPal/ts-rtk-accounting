import ProfileData from "./ProfileData"
import UpdateUser from "./UpdateUser";

const Profile = () => {

    const handleClickLogout = () => {
        // TODO Logout functionality
        alert('Logout');
    }

    return (
        <div>
            <ProfileData />
            <button onClick={handleClickLogout}>Logout</button>
            <UpdateUser />
        </div>
    )
}

export default Profile