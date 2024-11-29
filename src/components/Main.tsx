import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';
import photo from '../assets/images/photo.png';
import { Button } from "@mui/material";

function Main() {

  // Function will execute on click of button
  const onButtonClick = () => {    
    // using Java Script method to get PDF file
    fetch("cv.pdf").then((response) => {
        response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "cv.pdf";
            alink.click();
        });
    });
  };


  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={photo} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/srodrigo23" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/srodrigo23/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sergio Cárdenas</h1>
          <p>Full Stack Engineer | Data Analyst</p>
          
          <div className="mobile_social_icons">
            <a href="https://github.com/srodrigo23" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/srodrigo23/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

          <div className="download-button">
            <Button variant="text" endIcon={<DownloadIcon/>} onClick={onButtonClick}>Download CV</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Main;