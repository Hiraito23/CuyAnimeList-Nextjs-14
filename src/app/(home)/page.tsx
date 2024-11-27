import Container from "@/components/custom/Container";
import AnimePopuler from "@/components/utility/AnimePopuler";
import Link from "next/link";

const HomePage: React.FC = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=6`);
    const anime = await response.json();
    const topAnime = anime.data;

    return (
        <Container className="p-3">
            <div className="flex justify-between items-center">
                <p className="font-bold text-lg">Top anime populer</p>
                <Link href={`/populer`} className="underline text-blue-700">Lihat semua</Link>
            </div>
            <AnimePopuler animeList={topAnime} />
        </Container>
    );
};

export default HomePage;