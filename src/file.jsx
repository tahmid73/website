// import React, { useState, useEffect } from 'react';
// import fs from 'fs';

// function DirectoryListing({ directory }) {
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     const getFiles = async () => {
//       try {
//         const files = await fs.promises.readdir(directory);
//         setFiles(files);
//       } catch (error) {
//         console.error('Error reading directory:', error);
//       }
//     };
// //
//     getFiles();
//   }, [directory]);

//   return (
//     <div>
//       <h2>Files in {directory}:</h2>
//       <ul>
//         {files.map((file) => (
//           <li key={file}>{file}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DirectoryListing;