import React, { Suspense } from 'react'
import DeatilPage from '../components/DetailPage'
import LoaddingUI from '../components/LoaddingUI'
function page() {

  return (
    <>
      <Suspense fallback={<LoaddingUI/> }>
        <DeatilPage />
      </Suspense>
    </>
  )
}

export default page