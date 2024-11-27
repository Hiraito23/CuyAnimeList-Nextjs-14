interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className={`container mx-auto ` + props.className}>
        {props.children}
    </div>
  )
}

export default Container