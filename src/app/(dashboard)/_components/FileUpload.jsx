"use client";

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import HistoryTable from '../_components/historyTable';
import { Upload } from 'lucide-react';

const FileUpload = () => {
    const [uploadStatus, setUploadStatus] = useState('Upload');
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setUploadStatus('Loading...');
        setTimeout(() => {
            const newFile = {
                id: uploadedFiles.length + 1,
                name: acceptedFiles[0].name,
                link: URL.createObjectURL(acceptedFiles[0]), // For demonstration purposes
                prefix: 'prefixsample', // Example prefix
                tags: [], // Empty tags initially
            };
            setUploadedFiles([...uploadedFiles, newFile]); // Add the new file to the state
            setUploadStatus('Upload');
        }, 500);
    };

    const handleTagSelection = (fileId, tag, action) => {
        setUploadedFiles(uploadedFiles.map(file =>
            file.id === fileId
                ? {
                    ...file,
                    tags: action === 'remove'
                        ? file.tags.filter(t => t !== tag)
                        : [...file.tags, tag]
                }
                : file
        ));
    };


    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.csv, .xls, .xlsx',
    });

    return (
        <>
            <div className="flex items-center justify-center relative p-[20px] dark:bg-light-dark dark:text-stone-300">
                <div
                    {...getRootProps()}
                    style={{
                        border: '2px dashed #ccc',
                        padding: '20px',
                        textAlign: 'center',
                        borderRadius: '10px',
                        marginBottom: '20px',
                    }}
                >
                    <input {...getInputProps()} />
                    <div className='flex items-center justify-center'>
                        <img
                            src="https://img.icons8.com/color/96/000000/ms-excel.png"
                            alt="Excel icon"
                            style={{ marginBottom: '10px' }}
                        />
                    </div>
                    <p className='text-stone-400'>Drop your excel sheet here or <span style={{ color: 'blue', cursor: 'pointer' }}>browse</span></p>
                    <button
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#7A63FF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            marginTop: '20px',
                            cursor: uploadStatus === 'Loading...' ? 'not-allowed' : 'pointer'
                        }}
                        disabled={uploadStatus === 'Loading...'}
                    >
                        <div className='text-white dark:text-dark'>
                            {(uploadStatus === 'Upload') ? (
                                <div className='flex'>
                                    <Upload className='mr-1' />
                                    {uploadStatus}
                                </div>
                            ) : (
                                uploadStatus
                            )}
                        </div>
                    </button>
                </div>
            </div>
            <div>
                {uploadedFiles.length > 0 && (
                    <div className='mx-10'>
                        <div className='font-semibold text-2xl text-dark dark:text-white'>
                            Uploads
                        </div>
                        <HistoryTable
                            uploadedFiles={uploadedFiles}
                            handleTagSelection={handleTagSelection}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default FileUpload;
