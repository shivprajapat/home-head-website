function CrmPanel(props: any) {
  return (
    <div className="flex items-start flex-col justify-between lg:flex-row gap-6">
      <div className="flex flex-col items-start gap-7">
        {props.tabs.map((t: any, index: number) => (
          <button
            className={`items-center text-base lg:text-lg font-medium font-rubik text-black relative flex gap-4 before:absolute before:-bottom-[87%] before:left-5 before:h-full before:w-[1px] before:bg-[#707070] last:before:hidden`}
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
            <div className="flex flex-col items-start">
              <span className="text-base text-black">{t}</span>
              {props.selected === t && (
                <span className="text-left text-sm font-normal max-w-[240px] w-full text-[#929292]">
                  Packed with API features you will love to collaborate with issues.
                </span>
              )}{' '}
            </div>
          </button>
        ))}
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default CrmPanel
