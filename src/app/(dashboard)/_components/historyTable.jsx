import React, { useState } from 'react';

export default function HistoryTable({ uploadedFiles, handleTagSelection }) {
    const [selectedTag, setSelectedTag] = useState({});

    const handleChange = (fileId, event) => {
        const newTag = event.target.value;
        setSelectedTag(prevState => ({
            ...prevState,
            [fileId]: newTag
        }));

        const file = uploadedFiles.find(file => file.id === fileId);
        if (file && !file.tags.includes(newTag) && newTag) {
            handleTagSelection(fileId, newTag);
        }
    };

    const handleTagRemove = (fileId, tagToRemove) => {
        handleTagSelection(fileId, tagToRemove, 'remove');
        setSelectedTag(prevState => ({
            ...prevState,
            [fileId]: ''
        }));
    };

    return (
        <div className="w-full">
            <div className="w-full  bg-slate-200 mt-10 my-6 px-6 py-4 rounded-md dark:bg-black dark:text-white">
                {/* This div is horizontally scrollable only if content overflows */}
                <div className="w-full">
                    {/* Min-width ensures that the content will only scroll if it exceeds the viewport width */}
                    <div className="min-w-full lg:min-w-[700px] max-md:overflow-y-scroll">
                        <div className="flex mb-4">
                            <div className="w-[8%] text-center text-md my-auto">Sr. no</div>
                            <div className="p-2 text-center w-[25%] my-auto text-md">
                                Links
                            </div>
                            <div className="text-center w-[20%] my-auto text-md">
                                Prefixes
                            </div>
                            <div className="text-center w-[20%] my-auto text-md">
                                Add Tags
                            </div>
                            <div className="w-[25%] my-auto text-center text-md">
                                Selected Tag
                            </div>
                        </div>
                        {uploadedFiles.map((file, index) => (
                            <div key={file.id} className="flex mb-[16px] bg-white py-2 rounded-md dark:bg-light-dark">
                                <div className="w-[8%] text-center text-xl my-auto">{index + 1}</div>
                                <div className="p-2 text-center w-[25%] my-auto">
                                    <a href={file.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400">
                                        {file.name}
                                    </a>
                                </div>
                                <div className="text-center w-[20%] my-auto">
                                    {file.prefix}
                                </div>
                                <div className="text-center w-[20%] my-auto">
                                    <select
                                        value={selectedTag[file.id] || ''}
                                        onChange={(e) => handleChange(file.id, e)}
                                        className="p-[5px] px-[8px] rounded-lg text-center text-black dark:bg-black dark:text-white"
                                    >
                                        <option value="" disabled>Select Tags</option>
                                        <option value="Tag 1">Tag 1</option>
                                        <option value="Tag 2">Tag 2</option>
                                        <option value="Tag 3">Tag 3</option>
                                        <option value="Tag 4">Tag 4</option>
                                        <option value="Tag 5">Tag 5</option>
                                    </select>
                                </div>
                                <div className="w-[25%] my-auto flex gap-[2px]">
                                    {file.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="inline-block text-center p-[2px] px-2 bg-purple-500 rounded-lg mr-1 bg-purple text-white relative"
                                        >
                                            {tag}
                                            <button
                                                onClick={() => handleTagRemove(file.id, tag)}
                                                className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-400 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm"
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
