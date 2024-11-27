import Image from "next/image";
import Link from "next/link";

interface Anime {
    mal_id: number;
    title: string;
    title_japanese: string;
    images: {
        webp: {
            image_url: string;
        };
    };
}

interface AnimePopulerProps {
    animeList: Anime[];
}

const AnimePopuler: React.FC<AnimePopulerProps> = ({ animeList }) => {
    return (
        <div className="grid grid-cols-5 gap-4">
            {animeList?.slice(0, 5).map((anime) => (
                <Link href={`/${anime.mal_id}`} key={anime.mal_id} className="relative w-full h-80 rounded-xl">
                    <Image
                        src={anime.images.webp.image_url}
                        alt={anime.title_japanese}
                        fill
                        objectFit="cover"
                        priority
                        className="rounded-xl"
                    />
                    <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full rounded-b-xl">
                        <p>{anime.title_japanese}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default AnimePopuler;