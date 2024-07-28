function Tabs(props:any) {
    if (props.isSelected) {
      return <div>{props.children}</div>;
    }
    return null;
  }
  
  export default Tabs;
  