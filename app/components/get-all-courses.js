"use client";
import React, { useEffect } from "react";
import axios from "axios";

const GetAllCourses = () => {
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/api/course");
      console.log(response);
    })();
    return () => {};
  }, []);
  return <div></div>;
};

export default GetAllCourses;
