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

    const generateImg = () => {
        
    }

    const handleSubmit = () => {
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    }

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.promt);
        setForm({ ...form, promt: randomPrompt });
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
                    <div className="relative bg-gray-50 borger border-gray-300 text-gray-900 text-sm rounded-lg focuse:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
                        {form.photo ? (
                            <img
                                src={form.photo}
                                alt={form.promt}
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <img
                                src={preview}
                                alt="preview"
                                className="w-9/12 h-9/12 object-contai opacity-40"
                            />
                        )}

                        {generatingImg && (
                            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgbs(0, 0, 0, 0, 0.5)] rounded-lg">
                                <Loader />
                            </div>



                        )}

                    </div>
                </div>
                <div className="mt-5 flex gap-05">
                    <button
                        type="button"
                        onClick={generateImg}
                        className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        {generateImg ? "Generating Image..." : "Generate Image"}
                    </button>
                </div>
                <div className="mt-10">
                    <p className="mt-2 text-[#666e75 text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
                    <button
                        type="submit"
                        className="mt-3 text-white bg-[#6449ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        {loading ? 'Sharing...' : 'Share Image'}
                    </button>

                </div>
            </form>
        </section>
    )
}

export default CreatePost;