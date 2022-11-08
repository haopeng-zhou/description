import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Dialog } from "@mui/material";
import { useState } from "react";

const CopiedDialog = ({ open, onClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <p className="dialog">email copied to keyboard!</p>
      </Dialog>
    </div>
  );
};

const About = () => {
  const contactInfoSize = "20px";
  const [open, setOpen] = useState(false);

  const handleO = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const handleC = () => {
    setOpen(false);
  };

  return (
    <div className="about">
      <div>
        <h1>Haopeng ZHOU</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          facilis illum numquam, tenetur dolorem architecto dolores mollitia
          neque suscipit, eligendi nobis quidem sequi et? Cumque atque
          aspernatur veniam tempora aut?
        </p>
      </div>
      <div>
        <h1>Contact And Info</h1>
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/haopeng-zhou/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={contactInfoSize} />
            <span> haopeng-zhou</span>
          </a>
          <a
            href="https://github.com/haopeng-zhou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={contactInfoSize} />
            <span> haopeng-zhou</span>
          </a>
          <span>
            <CopyToClipboard text="haopeng.zhou@gmail.com">
              <span className="gmail" onClick={handleO}>
                <SiGmail size={contactInfoSize} />
                <span> haopeng-zhou</span>
              </span>
            </CopyToClipboard>
            <CopiedDialog open={open} onClose={handleC} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
