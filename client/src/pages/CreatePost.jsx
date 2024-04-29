import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";


const CreatePost = () => {
    const navigate = useNavigate(); // allowing us to navigate to home page once post created
    const [form, setForm] = useState({
        name: "",
        promt: "",
        photo: "",
    }); // form state
    const [generatingImg, setGeneratingImg] = useState(false); // loading state
    const [loading, setLoading] = useState(false); // loading state


    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
                <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
            </div>
        </section>
    )
}

export default CreatePost;