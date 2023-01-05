import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes/Routes';
import DefaultLayout from '~/layout/DefaultLayout';
import { Fragment, useEffect } from 'react';
import { useState } from 'react';

function App() {
    const [token, setToken] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        const getTokenApi = async () => {
            const result = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization:
                        'Basic ' + btoa('4f482d3452d04e2090916aed8c10631e' + ':' + '2135116a364c49d8b65c3115ddef3f4c'),
                },
                body: 'grant_type=client_credentials',
            });

            const data = await result.json();
            setToken(data.access_token);
        };

        getTokenApi();
    }, []);

    console.log(token);

    const genreId = '0JQ5DAqbMKFAUsdyVjCQuL';
    const tokenApi =
        'BQBHR20bhA6dZnkajey6bnJUWNz3U9Bsx5JIt0DEiTRxJC37iqHNVavdrCd42S4fs0z-McVEy116H6vhvJ1aG_4IJULVb_vNl0LhU6L_fRVkGK05kok        ';

    const id = '37i9dQZF1EVKuMoAJjoTIw';
    const getAlbums = async () => {
        const result = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
            method: 'GET',
            headers: {
                Authorization:
                    'Bearer ' +
                    'BQARadGDqRvNgO19cyJSxPST2L7dAwIqdo8vIf9cUaB7C_lmB_wYDEmWDLYfq6mQfrPPRqEbL6ZMKB0qYYEILjeIdixW8g_PWUgUC9espjw4f_LzN6M',
            },
        });

        const data = await result;

        console.log(data);
    };

    getAlbums();

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((router, index) => {
                        const Page = router.component;
                        let Layout = DefaultLayout;
                        if (router.layout) {
                            Layout = router.layout;
                        } else if (router.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
