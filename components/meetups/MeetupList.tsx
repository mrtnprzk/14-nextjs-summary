import React from "react";
import MeetupItem from "./MeetupItem";

interface Props {
  meetups: any;
}

const MeetupList = ({ meetups }: Props) => {
  return (
    <ul>
      {meetups.map((meetup: any) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
