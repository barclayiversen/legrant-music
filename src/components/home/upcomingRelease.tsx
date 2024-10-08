import React, { useState, useEffect } from "react";
import axios from "axios";

interface UpcomingReleaseData {
  albumArtUrl: string;
  albumName: string;
  releaseDate: string;
  flyerUrl: string;
}

// const getFormattedReleaseDate = (dateString: string) => {
//   const date = new Date(dateString);
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const month = monthNames[date.getMonth()];
//   const year = date.getFullYear();

//   return `Coming out in ${month} ${year}`;
// };

const UpcomingRelease: React.FC = () => {
  const [upcomingRelease, setUpcomingRelease] =
    useState<UpcomingReleaseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUpcomingRelease = async () => {
      try {
        const response = await axios.get("/api/datastore/show");
        console.log(response.data[0].flyerUrl);
        if (response.data && response.data[0].flyerUrl) {
          setUpcomingRelease(response.data[0]);
        } else {
          setUpcomingRelease(null);
        }
      } catch (err) {
        setError("Failed to load upcoming release.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUpcomingRelease();
  }, []);

  if (isLoading) return <p>Loading upcoming release...</p>;
  if (error) return <p>{error}</p>;
  if (!upcomingRelease) return null; // Do not render if no release data

  return (
    <div className="upcoming-release-container py-10 px-5 text-center bg-black max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Upcoming Shows</h2>
      <a href="https://dirtynotsorry.com/events/4-year-anniversary-party-02-24">
        <img
          src="https://dirtynotsorry.com/_next/image?url=%2Fmedia%2Fdns-4yr-anni-updated-1080x.jpg&w=1920&q=75"
          alt={`upcoming show for Legrant`}
          className="mx-auto"
        />
      </a>
      {/* <p className="mt-3 text-lg">{upcomingRelease.albumName}</p>
      <p className="text-sm text-white">
        {getFormattedReleaseDate(upcomingRelease.releaseDate)}
      </p> */}
    </div>
  );
};

export default UpcomingRelease;
