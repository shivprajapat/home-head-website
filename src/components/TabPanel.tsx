import React from 'react';
import IconArrowRight from '@/svg-icons/arrow-right';

interface TabPanelProps {
  tabs: string[];
  selected: string;
  click: (tab: string) => void;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ tabs, selected, click, children }) => {
  return (
    <div className="flex items-start flex-col md:flex-row gap-6">
      <div className="md:pr-10 lg:pr-36 xl:pr-40">
        {tabs.map((t, index) => (
          <button
            className={`w-64 flex-between text-sm sm:text-base font-medium px-5 py-4 border text-left rounded-md font-rubik ${
              selected === t ? 'border-white' : 'border-transparent'
            }`}
            key={index}
            onClick={() => click(t)}
          >
            {t}
            {selected === t && <IconArrowRight className="size-3" />}
          </button>
        ))}
      </div>
      <div className="md:pl-10 lg:pl-20 xl:pl-28 sm:border-l border-[#707070] font-urbanist font-medium">
        {children}
      </div>
    </div>
  );
};

export default TabPanel;
