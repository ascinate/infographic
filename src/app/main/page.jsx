import React, { Suspense } from 'react'
import DeatilPage from '../components/DetailPage'
function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>

        <DeatilPage />
      </Suspense>
    </>
  )
}

export default page