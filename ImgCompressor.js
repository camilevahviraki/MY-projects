import react from "React";
import {useState,useEffect} from 'React';
import './ImgCompressor.css';
import  imageCompression from 'browser-image-compression';

function ImgCompressor() {

    const [origImg,setOrigImg]=useState('');
    const [origImgFile,setOrigImgFile]=useState('');
    const [compressedImg,setCompressedImg]=useState('');
    const [fileName,setFileName]=useState('');
    //const [ImageTarget,setImageTarget]=useState('');

    const handle = (e) => {
       const imageTarget = e.target.files[0];
       setOrigImg (imageTarget); 
       setOrigImgFile(URL.createObjectURL(imageTarget));
       setFileName(imageTarget.name);

    };
    const handleCompressImage =(e) => {
       e.preventDefault();

       const options = {
          maxSizeMb :1,
          maxWidthorHeigth:500,
          useWebWorker:true
       }
       if (options.maxSizeMb >= origImg/(1024*1024)){
          alert("Image is too small,can't be compressed!");
          return 0 
       }
       let output;
       imageCompression(origImg,options).then((x)=>{
         output = x;
         
         const downloadLink = URL.createObjectURL(output);
         setCompressedImg(downloadLink);
       })

    };

    return(
       <div className="ImgCompressor">
          <div className="original">
            
             <input type="file" 
                    accept="image/*" 
                    className="OriginalImg" 
                    onChange={(e) => handle(e)}
             /> 
           
           <div className="original Img">

             {
                origImgFile ?  (
                            <img src={ origImgFile }  /> // Image selectionnee
                            ) : (
                                   <img src= "./SeekPng.com_male-icon-png_8474751" /> //Image par defaut 
                                )
             }
           </div> 
               {  
              origImgFile &&   <button type="button" onClick= {(e)=>{handleCompressImage(e)}}>Upload </button> 
               }
          </div>
          <div className="compressed">
            <div className="compressed Img">
              
            {
                compressedImg ?  (
                            <img src={ compressedImg } /> // Image selectionnee
                            ) : (
                                   <img src= "./SeekPng.com_male-icon-png_8474751 " /> //Image par defaut 
                                )
             
             }
             { compressedImg && (<button type="button">
                                     <a href={compressedImg} download={fileName}>
                                        {""}
                                        Download
                                     </a>
                                 </button>)  }
            </div>
          </div>
       </div>

    );
}

export default ImgCompressor;