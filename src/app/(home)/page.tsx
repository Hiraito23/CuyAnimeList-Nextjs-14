import Container from "@/components/Container";
import AnimePopuler from "./components/AnimePopuler";

const HomePage: React.FC = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
    const anime = await response.json();
    const animeList = anime.data;

    return (
        <Container>
            <p className="font-bold text-lg">Top anime populer</p>
            <AnimePopuler animeList={animeList} />
        </Container>
    );
};

export default HomePage;