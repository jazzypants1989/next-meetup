import NewMeetUpForm from "../../components/meetups/NewMeetUpForm";

const NewMeetUpPage = () => {
  function addMeetUpHandler(meetupData) {
    console.log(meetupData);
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
};

export default NewMeetUpPage;
