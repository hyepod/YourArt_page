import { Artwork } from "@/config/types";
import API_URL from "@config/apiUrl";
import { useFetchData } from "@config/fetchData";
import Head from "next/head";
import { useRouter } from "next/router";
import BreadCrumb from "./BreadCrumb";
import Carousel from "./Carousel";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Home() {
  const router = useRouter();
  const { id: artWorkId } = router.query;

  const fetchURL = API_URL.ARTWORK.GET_ARTWORK(artWorkId);
  const {
    data: artworkData,
    isLoading,
    isError,
  } = useFetchData<Artwork>(artWorkId ? fetchURL : null);

  if (isError) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Waiting</p>; // Here we can put the skeletons
  }

  return (
    <>
      <Head>
        <title>Your Art</title>
        <meta name="description" content="Your Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {artworkData && (
          <div className="container mx-auto mt-2 px-2">
            <BreadCrumb
              title={artworkData.title}
              name={artworkData.artistShort?.fullname}
            />
            <div className="flex flex-col md:flex-row mt-2 md:mt-10 gap-x-6 gap-y-6">
              <LeftPart {...artworkData} />
              <RightPart {...artworkData} />
            </div>
            <Carousel {...artworkData} />
          </div>
        )}
      </main>
    </>
  );
}
