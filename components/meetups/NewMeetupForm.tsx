import { useRef } from "react";
import Card from "../ui/Card";

interface Props {
  onAddMeetup: (enteredMeetupData: any) => void;
}

const NewMeetupForm = ({ onAddMeetup }: Props) => {
  const titleInputRef = useRef<any>(null);
  const imageInputRef = useRef<any>(null);
  const addressInputRef = useRef<any>(null);
  const descriptionInputRef = useRef<any>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    } as any;

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form
        onSubmit={submitHandler}
        className="flex flex-col p-5 space-y-5 min-w-[500px] bg-purple-100"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="font-bold">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            className="px-1 border border-purple-500 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="font-bold">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            className="px-1 border border-purple-500 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="font-bold">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            className="px-1 border border-purple-500 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-bold">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
            className="px-1 border border-purple-500 rounded"
          ></textarea>
        </div>
        <div className="text-right">
          <button className="bg-purple-500 rounded py-1 px-3">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
