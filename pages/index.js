import Layout from "../components/layout/layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Portland_and_Mt._Hood_from_Pittock_Mansion.jpg/1280px-Portland_and_Mt._Hood_from_Pittock_Mansion.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pioneer-SquareDaytime.jpg/800px-Pioneer-SquareDaytime.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};
export default HomePage;
