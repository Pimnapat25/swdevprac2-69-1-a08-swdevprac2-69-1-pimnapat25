import Image from "next/image";

const venueDetails = new Map([
  ["001", { venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" }],
  ["002", { venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" }],
  ["003", { venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" }],
]);

type VenueDetailPageProps = {
  params: Promise<{ vid: string }>;
};

export default async function VenueDetailPage({ params }: VenueDetailPageProps) {
  const { vid } = await params;
  const venue = venueDetails.get(vid);

  if (!venue) {
    return <div>Venue not found</div>;
  }

  return (
    <div>
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={venue.imgSrc}
          alt={venue.venueName}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">{venue.venueName}</h1>
    </div>
  );
}
