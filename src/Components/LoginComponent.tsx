import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginComponent() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    async function onSubmit(event: any) {
        event.preventDefault();

        const body = {
            "email": email,
            "password": password
        };

        const options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }

        try {
            const response = await fetch('https://library-crud-sample.vercel.app/api/user/login', options);

            if (!response.ok) {
                throw new Error('Bad Network Response');
            }

            const data = await response.json();
            console.log(data.token);

            const token = data.token;
            localStorage.setItem('token', token)

            setTimeout(() => {
                alert("Login Success");
                navigate("/dashboard");
            }, 1000);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Sign In</h1>

                <label htmlFor="email" className="block m-3 text-sm font-medium leading-6 text-white-900">
                    Email Address
                </label>
                <input 
                onChange={(event) => setEmail(event.target.value)}
                id="email" type="email" placeholder="Enter your email address"
                className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                <label htmlFor="password" className="block m-3 text-sm font-medium leading-6 text-white-900">
                Password
                </label>
                <input onChange={(event) => setPassword(event.target.value)}
                type="password" id="password" placeholder="Enter your password"
                className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

                <br />
                <Link to={"/register"} className="text-base">Register New User</Link>
                <br />

                <button
                type="submit"
                className="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Submit
                </button>

            </form>
        </div>
    )
}
