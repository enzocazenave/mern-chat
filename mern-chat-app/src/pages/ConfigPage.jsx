import { ConfigProfile, Navbar, SetInfo } from '../components';

export const ConfigPage = () => {
    return (
        <>
            <Navbar isConfig={ true } />
            <SetInfo />
            <ConfigProfile />
        </>
    )
}
