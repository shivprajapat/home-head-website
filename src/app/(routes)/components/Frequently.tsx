'use client'
import Accordion from '@/components/Accordion'
import Tabs from '@/components/tab'
import TabPanel from '@/components/TabPanel'
import { accordionData } from '@/constants'
import React, { useState } from 'react'

const Frequently = () => {
  const tabs = ['General', 'CRM Related', 'Evaluation', 'More Security Resources']
  const [tab, setTab] = useState('General')

  function selectedTab(tab: React.SetStateAction<string>) {
    setTab(tab)
  }

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  return (
    <section className="pt-0 py-6 lg:py-14">
      <div className="container">
        <div className="mb-4 md:mb-8">
          <h2 className="heading" data-aos="fade-up" data-aos-duration={1000}>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
        </div>
        <div className="max-w-screen-lg" data-aos="fade-up" data-aos-duration={1000}>
          <TabPanel tabs={tabs} click={selectedTab} selected={tab}>
            <Tabs isSelected={tab === 'General'}>
              {accordionData.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  isActive={activeIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </Tabs>
            <Tabs isSelected={tab === 'CRM Related'}>
              {accordionData.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  isActive={activeIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </Tabs>
            <Tabs isSelected={tab === 'Evaluation'}>
              {accordionData.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  isActive={activeIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}{' '}
            </Tabs>
            <Tabs isSelected={tab === 'More Security Resources'}>
              {accordionData.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  isActive={activeIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </Tabs>
          </TabPanel>
        </div>
      </div>
    </section>
  )
}

export default Frequently
