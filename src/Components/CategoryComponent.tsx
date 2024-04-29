import { prepareComponentToken } from "antd/es/typography/style";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Category } from "../Types/category";
import { UserProfile } from "../Types/user";
import AddCategoryComponent from "./AddCategoryComponent";

export default function CategoryComponent () {
    const [response, setResponse] = useState<UserProfile | null>(null);
    const [showAddComponent, setShowAddComponent] = useState<boolean>(false);
    const [catResponse, setCatResponse] = useState<Category[]>([]);

    const navigate = useNavigate()

    useEffect(() => {
        getProfile();
        getCategory();
    },[]);

    async function getProfile () {
        const token = localStorage.getItem("token");
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + token
            },
        };

        try {
            const response = await fetch('https://library-crud-sample.vercel.app/api/user/profile', options)
            if (!response.ok) {
                throw new Error('Bad Network Response');
            }

            const jsonData = await response.json();
            console.log(jsonData);
            const data = jsonData as UserProfile || null;
            setResponse(data);

        } catch (error) {
            console.error('Error:', error);
        }
    }    

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

    async function getCategory() {
        const token = localStorage.getItem("token");
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + token
            },
        };
        
        try {
            const response = await fetch('https://library-crud-sample.vercel.app/api/category', options);
            if (!response.ok) {
                throw new Error('Bad Network Response');
            }

            const jsonData = await response.json();
            const data = (jsonData as Category[]) || [];
            setCatResponse(data)
    
        } catch (error) {
            console.error('Error:', error)
        }
 
    }

    async function deleteCategory(id: string) {
        const token = localStorage.getItem("token");
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            },
        };

        try {
            const response = await fetch('https://library-crud-sample.vercel.app/api/category/:id', options);
            if (!response.ok) {
                throw new Error('Bad Network Response');
            }
            
            setTimeout(() => {
                alert("Delete Success");
                getCategory();
            }, 1000);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function updateCategory(data: Category) {
        const token = localStorage.getItem("token");
        const body = {
            category_name: data.category_name,
            category_description: data.category_description,
            is_active: true
        }
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(body)
        };


        try {
            const response = await fetch('https://library-crud-sample.vercel.app/api/category/update', options);
            if (!response.ok) {
                throw new Error('Bad Network Response');
            }
            
            setTimeout(() => {
                setShowAddComponent(false);
                alert("Update Data Success");
                getCategory();
            }, 1000);

        } catch (error) {
            console.error('Error:', error);
        }        
    }

    async function createCategory(data: Category) {
        const token = localStorage.getItem("token");
        const body = {
            category_name : data.category_name,
            category_description : data.category_description,
            is_active : true,
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify(body)
        };


        try {
            const response = await fetch('https://library-crud-sample.vercel.app/api/category/create', options);
            if (!response.ok) {
                throw new Error('Bad Network Response');
            }
            
            setTimeout(() => {
                setShowAddComponent(false);
                alert("New Category Added");
                getCategory();
            }, 1000);

        } catch (error) {
            console.error('Error:', error);
        }        
    }

    return (
        <>
        <header className="mb-5 text-base flex item-center justify-between p-6 bg-indigo-500">
            <div className="flex item-center">
                <nav>
                    <ul className="flex">
                        <li className="mr-6"><p>Book Library</p></li>
                    </ul>
                </nav>
            </div>
            <div>User Login: {response?.name} </div>
            <div>
                <button className="text-white rounded" onClick={logout}>Logout</button>
            </div>
        </header>

        <h1 className="my-3 text-3xl">CATEGORY DATA</h1>
        <hr />
        <br />
        <div className="relative overflow-x-auto">
            <table className="w-full bg-transparent text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Id</th>
                    <th scope="col" className="px-6 py-3">Category Name</th>
                    <th scope="col" className="px-6 py-3">Category Description</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {catResponse.length === 0 &&
                    <tr>
                        <td colSpan={5}>No Data</td>
                    </tr>
                }
                {catResponse.map(item => (
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">{item.id}</td>
                        <td className="px-6 py-4">{item.category_name}</td>
                        <td className="px-6 py-4">{item.category_description}</td>
                        <td className="px-6 py-4">{String(item.is_active)}</td>
                        <td className="px-6 py-4 flex justify-center space-x-2">
                            <button className="bg-green-500 text-white py-4 rounded" onClick={() => updateCategory(item)}>Update</button>
                            <button className="bg-red-500 text-white py-4 rounded" onClick={() => deleteCategory(item.id)}>Detele</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        <br />
        <br />
        <>
            <button className="bg-indigo-600 text-white p-3 rounded text-lg" onClick={() => setShowAddComponent(!showAddComponent)}> Create New Category </button>
        </>
        {showAddComponent && (
            <>
                <AddCategoryComponent onSubmit={createCategory} />
            </>
        )}
        </>                
    );
}