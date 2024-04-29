import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
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

    const handleSubmit = () => {
    }

    const handleChange = (e) => {
    }

    const handleSurpriseMe = () => {
    }


    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
                <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
            </div>
            <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <FormField
                        LabelName="Your Name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField
                        LabelName="Promt"
                        type="text"
                        name="promt"
                        placeholder="An enchanted forest where trees sing and dance to the rhythm of the wind, surrounded by firefly fairies"
                        value={form.promt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />

                </div>
            </form>
        </section>
    )
}

export default CreatePost;