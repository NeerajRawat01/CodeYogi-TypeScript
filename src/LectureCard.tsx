import React, { FC } from "react";
import MDEditor from "@uiw/react-md-editor";
import { DateTime, Duration } from "luxon";
import { Lecture } from "./Models.ts/lectures";

type lectureProps = { lectures: Lecture };
const LectureCard: FC<lectureProps> = ({ lectures }) => {
  const updated_str = lectures.updated_at;
  const updated_at = DateTime.fromISO(updated_str).toFormat("ccc LLL dd yyyy");
  const start_time_str = lectures.start_time;

  const start_time = DateTime.fromISO(start_time_str).toFormat("TT");

  const end_time_str = lectures.end_time;
  const end_time = DateTime.fromISO(end_time_str).toFormat("TT");

  // const start_tim = new Date(start_time_str);
  //const end_tim = new Date(end_time_str);

  //const diff = end_tim - start_tim;

  //const ans = new Date(diff).toISOString();
  // console.log(ans);
  //console.log(ans.substring(11, 19));

  let start_time_obj = Duration.fromISOTime(start_time).toObject();
  let end_time_obj = Duration.fromISOTime(end_time).toObject();

  function hmsToSeconds(t: string) {
    const [hours, minutes, seconds] = t.split(":");
    return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  }

  function secondsToHMS(secs: number) {
    return new Date(secs * 1000).toISOString().substr(11, 8);
  }

  let start_hour = start_time_obj.hours;
  let end_hour = end_time_obj.hours;
  let start_Minutes = start_time_obj.minutes;
  let end_Minutes = end_time_obj.minutes;
  let start_Secondes = start_time_obj.seconds;
  let end_Secondes = end_time_obj.seconds;

  var startTime = `${start_hour}:${start_Minutes}:${start_Secondes}`;
  var endTime = `${end_hour}:${end_Minutes}:${end_Secondes}`;

  const duration = secondsToHMS(
    hmsToSeconds(endTime) - hmsToSeconds(startTime)
  );

  //console.log(startTime);

  return (
    <div className="flex flex-col rounded-md shadow-md bg-white p-5">
      <div>
        <h3 className="font-semibold">
          Lecture #{lectures.id} <span className=" ml-3">( {updated_at})</span>
        </h3>
        <p className="text-gray-500">Duration:{duration} </p>
      </div>
      <div className="p-4">
        <MDEditor.Markdown
          source={lectures.topic}
          className=" font-semibold !text-black !bg-white"
        />
      </div>
      <a target="_blank" href={lectures.recording_url}>
        <div className="flex justify-center text-gray-500">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="w-4 h-4 sm:w-6 sm:h-6"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
          </svg>
          <span>Watch/Download Recording</span>
        </div>
      </a>
    </div>
  );
};

export default LectureCard;
