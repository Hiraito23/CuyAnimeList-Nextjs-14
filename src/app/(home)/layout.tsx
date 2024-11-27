import Navbar from "@/components/utility/Navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default HomeLayout