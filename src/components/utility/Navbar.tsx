import Link from "next/link";
import Container from "../custom/Container";
import { Input } from "../ui/input";

const Navbar: React.FC = () => {
  return (
    <div className="bg-blue-700 p-2">
      <Container className="flex flex-col md:flex-row gap-2 justify-between items-center">
        <Link href={`/`} className="font-bold text-white text-lg">
          CuyAnimeList
        </Link>
        <Input placeholder="Search Anime" className="w-full md:w-80 bg-white" />
      </Container>
    </div>
  );
};

export default Navbar;