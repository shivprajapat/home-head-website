import React from 'react'

interface CrmPanelProps {
  tabs: string[]
  selected: string
  click: (tab: string) => void
  children: React.ReactNode
}

const CrmPanel: React.FC<CrmPanelProps> = ({ tabs, selected, click, children }) => {
  return (
    <div className="flex items-start flex-col justify-between lg:flex-row gap-6">
      <div className="max-w-md w-full">
        <div className="mb-7 lg:mb-14">
          <p className="font-urbanist font-medium text-lg mb-2 text-black">Real estate CRM Software</p>
          <h2 className="heading font-urbanist !text-black">
            The app is great for <br /> <span className="highlight">Basic setup</span> and adjusts.
          </h2>
        </div>

        <div className="flex flex-col items-start">
          {tabs.map((t, index) => (
            <li
              className={`relative flex gap-4 cursor-pointer after:absolute mb-5 lg:mb-10 last:mb-0 ${selected === t ? 'after:-bottom-[62%]' : 'after:-bottom-[74%]'}  after:left-5 after:h-full after:w-[1px] after:bg-[#707070] text-base lg:text-lg font-medium font-rubik text-black last:after:hidden`}
              key={index}
              onClick={() => click(t)}
            >
              <button className={`size-10 rounded flex-center`}>
                <span
                  className={`block rounded  transition-all duration-300 ${selected === t ? 'bg-gradient-green w-full h-full' : 'bg-black size-5'}`}
                />
              </button>
              <div className="flex flex-col items-start">
                <span className="text-base text-black">{t}</span>
                {selected === t && (
                  <span className="text-left text-sm font-normal max-w-[240px] w-full text-[#929292]">
                    Packed with API features you will love to collaborate with issues.
                  </span>
                )}
              </div>
            </li>
          ))}
        </div>
      </div>
      <div className='flex-grow'>{children}</div>
    </div>
  )
}

export default CrmPanel
