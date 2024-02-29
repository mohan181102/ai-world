import SideBar from '@/components/shared/SideBar'
import React from 'react'
 

function layout({children}:{children:React.ReactNode}) {
  return (
    <main className="root flex min-h-screen w-full flex-col bg-white lg:flex-row ">
      {/* sidebar */}
  
      <SideBar/>
        <div className="root-container mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10 ">
            <div className="wrapper bg-purple-gradient bg-cover bg-clip-text text-transparent">
                {children}
            </div>
        </div>
    </main>
  )
}

export default layout