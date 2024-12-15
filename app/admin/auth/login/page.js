import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <div className="container m-auto ">
        <div className="w-[300px] m-auto bg-white p-2 rounded-md">
          <div className="flex flex-col mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              id=""
              className="border py-1 border-gray-300 mt-1 rounded-md px-2 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="email"
              id=""
              className="border py-1 border-gray-300 mt-1 rounded-md px-2 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <button className="bg-black text-white py-1 mt-4 rounded-md">
              Login
            </button>
            <p className="text-center text-sm mt-1">
              Don't have account{" "}
              <Link href="/admin/auth/signup">Click Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
