import React, { useEffect, useMemo, useRef, useState} from "react"; 
import { Link } from "react-router-dom";
 
function Home() {
    return (
        <>
            <h1 className="text-3xl"> Homepage </h1>
            <br />
            <br />
            <p className="text-base">Already have an account?</p>
            <button
                type="button"
                className="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link to={"/login"} className="text-base">Log In</Link>
            </button>
            <br />
            <br />
            <p className="text-base">Make a new account!</p>
            <button
                type="button"
                className="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link to={"/register"} className="text-base">Register</Link>
            </button>
        </>
    )
}

export default Home;