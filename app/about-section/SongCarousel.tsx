import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "../animations/animate.css";

const SongCarousel = () => {
  return (
    <div className="animate absolute bottom-5 w-full">
      <div className="mx-auto flex w-[900%] sm:w-[340%] md:w-[305%] lg:w-[300%] xl:w-[200%]">
        <div className="flex w-1/2 justify-around gap-5  lg:my-[1px]">
          {songs.map((song: SongProps, index) => (
            <SongCard key={index} image={song.image} />
          ))}
        </div>
        <div className="flex w-1/2 justify-around gap-5 ml-5 lg:my-[1px]">
          {songs.map((song: SongProps, index) => (
            <SongCard key={index} image={song.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongCarousel;
