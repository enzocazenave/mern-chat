import { Navbar, SetProfileInfo, Posts } from '../components/';
import { useAuthStore } from '../hooks';

export const MainPage = () => {

    const { user } = useAuthStore();

    const hasPhoto = user.profile_img && user.username;
    
    return (
        <>
            <Navbar />
            { (!hasPhoto) && <SetProfileInfo /> }
            <Posts hasPhoto={ hasPhoto } />
        </>
    )
}
