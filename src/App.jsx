import { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import GeneralLayout from './Layouts/GeneralLayout';

import './styles/app.scss'

function App() {  
  return (
    <>
      <GeneralLayout>
          <Suspense
            fallback={
              <>
                <div>Loading...</div>
              </>
            }
          >
            <Outlet />
          </Suspense>
        </GeneralLayout>
    </>
  )
}

export default App
