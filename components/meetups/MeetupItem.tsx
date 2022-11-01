import { useRouter } from "next/router";
import React from "react";
import Card from "../ui/Card";

interface Props {
  id: any;
  image: any;
  title: any;
  address: any;
}

const MeetupItem = ({ id, image, title, address }: Props) => {
  const router = useRouter()

  const showDetailsHandler = () => {
    router.push(`/${id}`)
  }

  return (
    <li>
      <Card>
        <div>
          <img src={image} alt={title} className="max-h-96" />
        </div>
        <div className="text-center border-t py-5">
          <h3 className="font-bold text-3xl">{title}</h3>
          <address>{address}</address>
        </div>
        <div className="text-center pb-5">
          <button onClick={showDetailsHandler} className="border-2 border-purple-500 text-purple-500 rounded py-1 px-3">
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
