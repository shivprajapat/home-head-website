import IconArrowRight from '@/svg-icons/arrow-right'

function TabPanel(props: any) {
  return (
    <div className="flex items-start flex-col md:flex-row">
      <div className="sm:border-r border-[#707070] pr-40">
        {props.tabs.map((t:any, index:number) => (
          <button
            className={`w-64 flex-between text-base font-medium px-5 py-4 border text-left rounded-md ${
              props.selected === t ? 'border-white' : 'border-transparent'
            }`}
            key={index}
            onClick={() => props.click(t)}
          >
            {t}
            {props.selected === t && <IconArrowRight className="size-3" />}
          </button>
        ))}
      </div>
      <div className="pl-10">{props.children}</div>
    </div>
  )
}

export default TabPanel
