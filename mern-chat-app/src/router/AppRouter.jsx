import { Route, Routes, Navigate } from 'react-router-dom';
import { LoadingPage, MainPage, ConfigPage } from '../pages/';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {

    const status = 'authenticated';

    if (status === 'checking') return ( <LoadingPage /> );
    
    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/*" element={ <AuthRoutes /> } />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={ <MainPage /> } />
                            <Route path="/config" element={ <ConfigPage /> } />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
                    )
            }
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}

