import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { LoadingPage, MainPage } from '../pages/';

export const AppRouter = () => {

    const status = 'checking';

    if (status === 'checking') return( <LoadingPage /> );
    
    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/*" element={ <LoginPage /> } />
                            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={ <MainPage /> } />
                            <Route path="/*" element={ <Navigate to="/"/> } />
                        </>
                    )
            }
        </Routes>
    )
}
