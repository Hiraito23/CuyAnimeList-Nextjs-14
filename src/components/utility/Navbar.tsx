import Link from "next/link"
import Container from "../Container"
import { Input } from "../ui/input"

const Navbar: React.FC = () => {
  return (
    <div className="bg-blue-700 p-2">
        <Container className="flex justify-between">
            <Link href={`/`} className="font-bold text-white text-lg">CuyAnimeList</Link>
            <Input placeholder="Search Anime" className="w-60 bg-white" />
        </Container>
    </div>
  )
}

export default Navbar