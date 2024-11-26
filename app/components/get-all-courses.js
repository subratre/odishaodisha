"use client";
import React, { useEffect } from "react";
import axios from "axios";

const GetAllCourses = () => {
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://odisha-content.vercel.app/api/course"
      );
      console.log(response);
    })();
    return () => {};
  }, []);
  return <div></div>;
};

export default GetAllCourses;
