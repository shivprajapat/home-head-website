interface TabsProps extends React.HTMLProps<HTMLDivElement> {
  isSelected?: boolean;
}

function Tabs({ isSelected, ...rest }: TabsProps) {
  if (isSelected) {
    return <div {...rest} />;
  }
  return null;
}

export default Tabs;
