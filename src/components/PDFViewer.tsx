import React from "react";
// Import the main component
import { Viewer, Worker } from "@react-pdf-viewer/core";
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type Props = {
  height?: number;
  fileUrl: string;
};

const PDFViewer = ({ height = 750, fileUrl }: Props) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div
      style={{
        height: height,
        overflow: "scroll",
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={fileUrl}
          plugins={[defaultLayoutPluginInstance]}
          theme={"dark"}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
