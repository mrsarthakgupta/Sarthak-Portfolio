import React, { useEffect, useState } from 'react';
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = 
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);
  const pdfUrl = "/SarthakGupta_Resume.pdf";

  useEffect(() => {
    const handleResize = () => setWid(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ResumePage">
      <Document file={pdfUrl} className="resumeview">
        <Page
          pageNumber={1}
          scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1}
        />
      </Document>

      <a href={pdfUrl} download="SarthakGupta_Resume.pdf">
        <button className="downloadCV" type="button">
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
};

export default Resume;
