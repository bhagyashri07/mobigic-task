import React, { useState } from 'react';
import { singleFileUpload } from '../data/api';



const FileUploadScreen = (props) => {
    const [singleFile, setSingleFile] = useState('');

    const SingleFileChange = (e) => {
        setSingleFile(e.target.files[0]);

    }

    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));

        }
    }

    const uploadSingleFile = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData, singleFileOptions);
        props.getsingle();
    }

    return (
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group ">
                    <h2 className=' text-danger font-weight-bolder border-bottom text-center'>Select Single File</h2>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
                </div>
                <br />
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile()} >Upload</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default FileUploadScreen;