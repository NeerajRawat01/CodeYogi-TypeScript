import React, { FC } from "react";
import LectureCard from "./LectureCard";
import { useEffect } from "react";
import { getLectures } from "./Api";
import { Lecture } from "./Models.ts/lectures";

const LectureList : FC = ()=> {
  const [lecture, setLectures] = React.useState<Lecture[]>([]);

  useEffect(() => {
    const lecturesPromise =  getLectures().then((lecturesPromise)=>{
         setLectures(lecturesPromise);
    });
   
  }, []);

  return (
    <>
      <h1 className=" font-bold text-xl text-gray-900 ">Lecture List</h1>
      <div className=" p-2 mt-5 border-md bg-white ">
        <div className=" m-5 space-y-4 px-20 ">
          {lecture.map((l) => (
            <LectureCard key={l.id} lectures={l}></LectureCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default LectureList;