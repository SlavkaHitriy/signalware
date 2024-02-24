import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Inventory } from '@/modules/Inventory';
import { InventoryDetails } from '@/modules/InventoryDetails';
import { MapView } from '@/modules/MapView';
import { PipeProfiles } from '@/modules/PipeProfiles';
import { PipeProfilesDetails } from '@/modules/PipeProfilesDetails';
import { PipeProfilesNew } from '@/modules/PipeProfilesNew';
import { PipeTally } from '@/modules/PipeTally';
import { PipeTallyDetails } from '@/modules/PipeTallyDetails';
import { PipeTallyNew } from '@/modules/PipeTallyNew';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './modules/Login';
import { InventoryNew } from '@/modules/InventoryNew';
import { Dashboard } from '@/modules/Dashboard/index.js';
import { Settings } from '@/modules/Settings/index.js';

export const App = () => {
    const location = useLocation();

    return (
        <div className={'app'}>
            {!location.pathname.includes('auth') && <Sidebar />}
            <div className={'app-inner'}>
                {!location.pathname.includes('auth') && <Header />}
                <main className={'main'}>
                    <Routes>
                        <Route path='/auth/login' element={<Login />} />

                        <Route path='/dashboard' element={<Dashboard />} />

                        <Route path='/settings' element={<Settings />} />

                        {/*<Route path='/inventory' element={<Inventory />} />*/}
                        {/*<Route path='/inventory/new' element={<InventoryNew />} />*/}
                        {/*<Route path='/inventory/:id' element={<InventoryDetails />} />*/}

                        {/*<Route path='/pipe-tally' element={<PipeTally />} />*/}
                        {/*<Route path='/pipe-tally/new' element={<PipeTallyNew />} />*/}
                        {/*<Route path='/pipe-tally/:id' element={<PipeTallyDetails />} />*/}

                        {/*<Route path='/pipe-profiles' element={<PipeProfiles />} />*/}
                        {/*<Route path='/pipe-profiles/new' element={<PipeProfilesNew />} />*/}
                        {/*<Route path='/pipe-profiles/:id' element={<PipeProfilesDetails />} />*/}

                        {/*<Route path='/map-view' element={<MapView />} />*/}

                        <Route path='*' element={<Navigate to='/dashboard' replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};
