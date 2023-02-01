import { Artwork } from "@/config/types";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";

export default function LeftPart(artworkData: PropsWithChildren<Artwork>) {
  const [showDescription, setShowDescription] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="basis-1/2 space-y-2">
      <div className="relative w-[100%] h-[300px] sm:h-[400px] md:h-[600px]">
        <Image
          // src={artworkData.imageUrl} // ERROR 429 !
          src={`/artwork/${artworkData.title}.jpg`}
          alt={artworkData.description}
          fill
          className="object-contain m-auto"
          priority
        />
      </div>
      <div className="flex flex-row justify-evenly pb-4 text-sm font-semibold">
        <div className="flex flex-row space-x-1 items-center hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
          </svg>

          <p>VIEW IN A ROOM</p>
        </div>
        <div className="flex flex-row space-x-1 items-center hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z" />
          </svg>

          <p>AR VIEW</p>
        </div>
      </div>
      <div
        onClick={() => setShowDescription(!showDescription)}
        className="w-[100%] text-left border-b-2 border-black pb-2 hover:cursor-pointer hover:bg-gray-200"
      >
        <p className="font-semibold">DESCRIPTION</p>
        {showDescription && <p className="pb-2">{artworkData.description}</p>}
      </div>
      <div
        onClick={() => setShowDetail(!showDetail)}
        className="w-[100%] text-left border-b-2 border-black pb-2 hover:cursor-pointer hover:bg-gray-200"
      >
        <p className="font-semibold">SUBJECT, MEDIUM, STYLE, MATERIALS</p>
        {showDetail && (
          <p className="pb-2">
            <>
              <p>SUBJECT {artworkData.subjects}</p>
              <p>MEDIUM {artworkData.mediums}</p>
              <p>STYLE {artworkData.styles}</p>
              <p>MATERIALS {artworkData.materials}</p>
            </>
          </p>
        )}
      </div>
    </div>
  );
}
