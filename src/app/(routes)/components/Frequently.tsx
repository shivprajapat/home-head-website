'use client'
import Tabs from '@/components/tab'
import TabPanel from '@/components/TabPanel'
import React, { useState } from 'react'

const Frequently = () => {
  const tabs = ['General', 'CRM Related', 'Evaluation', 'More Security Resources']
  const [tab, setTab] = useState('General')

  function selectedTab(tab: React.SetStateAction<string>) {
    setTab(tab)
  }

  return (
    <section className="py-6 lg:py-14">
      <div className="container">
        <div className='mb-4 md:mb-8'>
          <h2 className="heading">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
        </div>
        <div className="max-w-screen-lg">
          <TabPanel tabs={tabs} click={selectedTab} selected={tab}>
            <Tabs isSelected={tab === 'General'}>General tab</Tabs>
            <Tabs isSelected={tab === 'CRM Related'}>CRM Related tab</Tabs>
            <Tabs isSelected={tab === 'Evaluation'}>
              <div>Evaluation</div>
            </Tabs>
            <Tabs isSelected={tab === 'More Security Resources'}>
              <ul>
                <li>hhh</li>
                <li>jjj</li>
                <li>llll</li>
              </ul>
            </Tabs>
          </TabPanel>
        </div>
      </div>
    </section>
  )
}

export default Frequently
