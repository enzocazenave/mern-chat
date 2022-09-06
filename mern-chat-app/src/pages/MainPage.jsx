import { Navbar, SetProfileInfo, Posts } from '../components/';

export const MainPage = () => {
    const hasPhoto = false;
    
    return (
        <>
            <Navbar />
            { (!hasPhoto) && <SetProfileInfo /> }
            <Posts hasPhoto={ hasPhoto } />
        </>
    )
}
