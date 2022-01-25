import axios from 'axios';
import React, {useState, useEffect} from 'react';
//import {singleFileUpload} from './data/Api.js';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//import './progress.css'
//import './SendMultiple.css'

const SendFilesDisplay = (props) => { 
   
    const [multipleFile,setMultipleFile] = useState('');
    const [title,setTitle] = useState('');
    const [progress,setProgress] = useState('');
    const [fileR,setFileR] = useState('');
   
 

    const MultipleFileChange = (e) => {
        setMultipleFile(e.target.files[0]);
        setFileR(URL.createObjectURL(e.target.files[0]));
    
    }
    
   
    const UploadMultiple = async (e) => {
        const multi= new FormData();
        multi.append("title", title);
        multi.append("gallery",multipleFile);
        

       // set progress-bar
        const options = {
            onUploadProgress: progressEvent => {
                const {loaded,total} = progressEvent;
                let percent = Math.floor((loaded*100)/total);
                setProgress(percent);
                console.log(`${loaded}kb of ${total}kb | ${percent}%`)
                if(percent < 100){
                   
                }
            }
        }
        // send file to the backend 
        axios.post("http://localhost:3002/gallery",multi,options)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        console.log(fileR);
        console.log(multi);
        console.log(title);
    }

    return (
        <div className="row mt-3">
            
            <div className = "col-6">
                <div className="form-goup">
                   <labe> Title</labe>
                   <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Select gallery</label>   
                    <input type="file" name="multipleFile"  className="form-control" accept=" .png ,.jpg" 
                    onChange={(e) => MultipleFileChange(e)}/>
                </div> 
                <button type="button" onClick={() => UploadMultiple() }>Upload gallery</button>
              <div className="progress-bar"> 
                   <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    styles={buildStyles({
                       rotation: 0.25,
                       strokeLinecap: 'butt',
                       strokeWidth: 12 ,
                       textSize:'16px',
                       pathTransitionDuration: 0.5,
                       pathColor: `rgba(255,136,136,${progress})`,
                       textColor: '#f88',
                       trailColor: '#d6d6d6',
                       backgroundColor: '#3e98c7', 
                       
                      })}
                />
                 <img src={fileR} />
                 
                </div>
            </div>
        </div>
    );
}

export default SendFilesDisplay;
