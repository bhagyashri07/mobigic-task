import React, { useState, useEffect } from 'react';
import FileUploadScreen from "../screens/FileUploadScreen";
import { getSingleFiles } from '../data/api';

function Home() {
  const [singleFiles, setSingleFiles] = useState([]);
  const [deletefiles, setDeletefiles] = useState([]);



  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  }



  const deletefile = async () => {
    try {
      const fileslist = await deletefile();
      setDeletefiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    deletefile();


  }, []);

  useEffect(() => {
    getSingleFileslist();



  }, []);





  return (
    <>
      <div className="container">
        <h1 className="text-dark font-weight-bolder border-bottom text-center">Upload File </h1>
        <FileUploadScreen getsingle={() => getSingleFileslist()} />
      </div>
      <div className="container-fluid mx-3 my-3">
        <div className="row">
          <div className="col-10">
            <h2 className="text-success font-weight-bolder border-bottom text-center">Uploaded Files List</h2>
            <div className="row">

              <br />
              {singleFiles.map((file, index) =>
                <div className="col-3">
                  <br />
                  <div className="card mb-2 border-1 p-1">
                    <img src={`http://localhost:5000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img" />
                  </div>
                  <button className='btn btn-primary' style={{ marginLeft: "10px", padding: "3px" }} onClick={() => deletefile()}>Delete</button>

                  <button className='btn btn-primary' style={{ marginLeft: "10px", padding: "3px" }}>Download</button>
                </div>
              )}

            </div>

          </div>



        </div>
      </div>
    </>
  );
}

export default Home;