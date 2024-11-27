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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {animeList?.map((anime) => (
                <Link href={`/${anime.mal_id}`} key={anime.mal_id} className="flex flex-col h-full">
                    <div className="flex-1">
                        <Image
                            src={anime.images.webp.image_url}
                            alt={anime.title_japanese}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-black/70 text-white p-2 w-full">
                        <p className="text-center">{anime.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
export default AnimePopuler;