import { Category } from "../Types/category";
import React, { useState } from "react";

export default function AddCategoryComponent(props: { onSubmit: (value: Category) => void}) {
    const [categoryName, setCategoryName] = useState<string>("");
    const [categoryDesc, setCategoryDesc] = useState<string>("");

    async function onSubmitCat(event: any) {
        event.preventDefault()        
        const categoryData: Category = {
            id: "",
            category_name: categoryName,
            category_description: categoryDesc,
            is_active: true
        }
        props.onSubmit(categoryData);
    }

    return (
        <div className="flex justify-center px-6 py-12">
            <form onSubmit={onSubmitCat}>
                <>
                    <h1 className="mt-10 text-2xl font-bold leading-9 tracking-tight"> Submit Data </h1>
                </>
                <>
                    <label className="block m-3 text-sm font-medium leading-6 text-white-900">
                        Category Name
                    </label>
                    <input onChange={(event) => setCategoryName(event.target.value)} placeholder="Enter category name"
                    className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </>
                <>
                    <label className="block m-3 text-sm font-medium leading-6 text-white-900">
                        Category Description
                    </label>
                    <input onChange={(event) => setCategoryDesc(event.target.value)} placeholder="Enter category description"
                    className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </>
                <br />
                <>
                    <button type="submit" className="m-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Submit
                    </button>                    
                </>
            </form>

        </div>
    )

}