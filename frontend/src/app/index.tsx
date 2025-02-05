import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

// Componenets
import Layout from '../components/Layout';

import { General as ErrorGeneral } from '../components/Errors/General';

// Pages
import { Home } from '../pages/Home';
import { Tasks } from '../pages/Tasks';

const App = () => {
  return (
    <BrowserRouter>
        <ErrorBoundary fallback={<ErrorGeneral/>}>
            <Suspense fallback={<p> Cargando... </p>}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/home' element={<Home/>} />
                        <Route path='/tasks' element={<Tasks
                        />} />
                    </Route>
                </Routes>
            </Suspense>
        </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App;