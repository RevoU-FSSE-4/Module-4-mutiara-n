import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CategoryComponent from "./CategoryComponent";

export default function Dashboard () {
    const [response, setResponse] = useState<string>("");
    const navigate = useNavigate()

    useEffect(() => {
        async function getProfile () {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer' + localStorage.getItem("token")
                },
            };

            try {
                const response = await fetch('https://library-crud-sample.vercel.app/api/user/profile', options)
                if (!response.ok) {
                    throw new Error('Bad Network Response');
                }
    
                const jsonData = await response.json();
                console.log(jsonData);
                setResponse(JSON.stringify(jsonData));
    
            } catch (error) {
                console.error('Error:', error);
            }
        }
        getProfile()
    }, []);

    async function logout(event:any) {
        event.preventDefault()

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem("token")
            },
        };

        try {
            const response = await fetch('https://library-crud-sample.vercel.app/api/user/logout', options)
            if (!response.ok) {
                throw new Error('Bad Network Response');
            }

            const data = await response.json();
            console.log(data.token)

            setTimeout(() => {
                alert("Logout Success");
                localStorage.clear();
                navigate("/");
            }, 1000);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <h1 className="text-3xl">Dashboard</h1>
            <button className="m-5 bg-indigo-600 text-white p-4 rounded" onClick={logout}>Logout</button>
            <>
                <p> JSON : {response}</p>
            </>        
        </>
    );
}