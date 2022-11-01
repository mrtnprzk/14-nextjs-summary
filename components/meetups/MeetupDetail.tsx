import React from "react";

interface Props {
  image: string;
  title: string;
  address: string;
  description: string;
}

const MeetupDetail = ({ image, title, address, description }: Props) => {
  return (
    <div className="border border-purple-500 rounded-xl text-center overflow-hidden max-w-[1000px] m-5">
      <img src={image} alt={title}/>
      <div className="p-5 border-t border-purple-500 space-y-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <address className="text-xl">{address}</address>
          <p className="text-lg text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default MeetupDetail;
