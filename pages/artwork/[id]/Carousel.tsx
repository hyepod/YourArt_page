import { Artwork } from "@/config/types";
import Image from "next/image";
import { Key, PropsWithChildren, useRef, useState } from "react";
import useDraggableScroll from "use-draggable-scroll";

export default function Carousel(artworkData: PropsWithChildren<Artwork>) {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);
  const [scroll, setScroll] = useState("left");

  return (
    <div className="flex flex-row my-8">
      <div
        className="cursor-pointer z-10 self-center flex-shrink rotate-y"
        onClick={(event) => {
          if (event.currentTarget.parentElement) {
            const element =
              event.currentTarget.parentElement.querySelectorAll<HTMLElement>(
                ".horizontal-scroll"
              )[0];
            element.style.scrollBehavior = "smooth";
            element.scrollLeft -= 500;
            element.style.scrollBehavior = "initial";

            if (element.scrollLeft <= 1) {
              setScroll("left");
            } else {
              setScroll("");
            }
          }
        }}
      >
        {scroll === "left" ? (
          <div className="w-[50px]" />
        ) : (
          <Image
            src="/arrow.png"
            alt="arrow"
            width={50}
            height={50}
            className="max-w-none"
          />
        )}
      </div>
      <div
        className="grid grid-flow-col space-x-10 overflow-hidden horizontal-scroll"
        ref={ref}
        onMouseDown={onMouseDown}
      >
        {artworkData.otherArtworkImages?.map(
          (image: string, index: Key | null | undefined) => (
            <div key={index} className="w-[100px] h-[100px] relative">
              <Image
                // src={image} // ERROR 429 !
                src={`/artwork/${image.split("/").slice(-1)}`}
                alt={image}
                fill
                className="object-cover"
                sizes="(max-width: 100px) 100vw,(max-width: 100px) 50vw,33vw"
                // @ts-ignore
                style={{ WebkitUserDrag: "none" }}
              />
            </div>
          )
        )}
      </div>
      <div
        className="cursor-pointer z-10 self-center"
        onClick={(event) => {
          if (event.currentTarget.parentElement) {
            const element =
              event.currentTarget.parentElement.querySelectorAll<HTMLElement>(
                ".horizontal-scroll"
              )[0];
            element.style.scrollBehavior = "smooth";
            element.scrollLeft += 500;
            element.style.scrollBehavior = "initial";
            if (
              element.scrollLeft + element.clientWidth + 10 >=
              element.scrollWidth
            ) {
              setScroll("right");
            } else {
              setScroll("");
            }
          }
        }}
      >
        {scroll === "right" ? (
          <div className="w-[50px]" />
        ) : (
          <Image
            src="/arrow.png"
            alt="arrow"
            width={50}
            height={50}
            className="max-w-none"
          />
        )}
      </div>
    </div>
  );
}
