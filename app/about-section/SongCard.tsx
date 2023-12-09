import Image from "next/image";
import { SongProps } from "./songDetails";
import Link from "next/link";

const SongCard = ({image }: SongProps) => {
  return (
    <div>
       <Image
        src={image}
        className="w-full items-stretch justify-center rounded-xl bg-cover bg-center " alt={""}        />
        <div className=" hidden h-[150%] w-full bg-gradient-to-t from-black to-transparent"></div>
    </div>
       

  );
};

export default SongCard;
