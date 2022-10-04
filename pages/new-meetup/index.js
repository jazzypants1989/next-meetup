import { useRouter } from "next/router";
import NewMeetUpForm from "../../components/meetups/NewMeetUpForm";

const NewMeetUpPage = () => {
  const router = useRouter();

  async function addMeetUpHandler(meetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
};

export default NewMeetUpPage;
