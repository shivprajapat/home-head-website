function CrmPanel(props: any) {
  return (
    <div className="flex items-start flex-col justify-between lg:flex-row gap-6">
      <div className="flex flex-col items-start gap-7">
        {props.tabs.map((t: any, index: number) => (
          <button
            className={`items-center text-base lg:text-lg font-medium font-rubik text-black relative flex gap-4 after:absolute after:-bottom-[100%] after:left-5 after:h-full after:w-[1px] after:bg-[#707070] last:after:hidden`}
            key={index}
            onClick={() => props.click(t)}
          >
            <div className="w-10 flex-center">
              <span
                className={`rounded transition-all duration-300 ease-out block flex-none ${
                  props.selected === t ? 'bg-gradient-green size-9' : 'bg-black size-5'
                } `}
              />
            </div>
              <span>{t}</span>
          </button>
        ))}
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default CrmPanel
