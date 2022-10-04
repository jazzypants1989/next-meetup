import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Meta from "../../components/layout/Meta";

const MeetUpMain = (props) => {
  return (
    <div>
      <Meta
        title={props.meetupData.title}
        description={props.meetupData.description}
      />
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </div>
  );
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = new MongoClient("process.env.MONGO_URI");
  client.connect();
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const client = new MongoClient("process.env.MONGO_URI");
  client.connect();
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: "blocking",
  };
}

export default MeetUpMain;
