import React from "react";

export default function FormattedDate(props) {
  const day = props.date.toLocaleDateString(undefined, { weekday: "long" });
  const hours = String(props.date.getHours()).padStart(2, "0");
  const minutes = String(props.date.getMinutes()).padStart(2, "0");

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
