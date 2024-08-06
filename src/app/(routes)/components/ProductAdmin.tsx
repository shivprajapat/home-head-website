import CrmPanel from '@/components/CrmPanel'
import Tabs from '@/components/tab'
import Image from 'next/image'
import React, { useState } from 'react'

const ProductAdmin = () => {
  const tabs = ['Land Management', 'Project Management', 'Property Management', 'Lead Management', 'Sales Reports', 'Team Management']
  const [tab, setTab] = useState('Land Management')

  function selectedTab(tab: React.SetStateAction<string>) {
    setTab(tab)
  }
  return (
    <CrmPanel tabs={tabs} click={selectedTab} selected={tab}>
      <Tabs isSelected={tab === 'Land Management'} className="relative">
        <Image src="/images/land-management.svg" alt="" width={700} height={550} className='w-full' loading='lazy' />
      </Tabs>
      <Tabs isSelected={tab === 'Project Management'} className="relative">
        <Image src="/images/land-management.svg" alt="" width={700} height={550} className='w-full' loading='lazy' />
      </Tabs>
      <Tabs isSelected={tab === 'Property Management'} className="relative">
        <Image src="/images/land-management.svg" alt="" width={700} height={550} className='w-full' loading='lazy' />
      </Tabs>
      <Tabs isSelected={tab === 'Lead Management'} className="relative">
        <Image src="/images/land-management.svg" alt="" width={700} height={550} className='w-full' loading='lazy' />
      </Tabs>
      <Tabs isSelected={tab === 'Sales Reports'} className="relative">
        <Image src="/images/land-management.svg" alt="" width={700} height={550} className='w-full' loading='lazy' />
      </Tabs>
      <Tabs isSelected={tab === 'Team Management'} className="relative">
        <Image src="/images/land-management.svg" alt="" width={700} height={550} className='w-full' loading='lazy' />
      </Tabs>
    </CrmPanel>
  )
}

export default ProductAdmin
