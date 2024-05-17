import React from 'react';

const Files = ({ files }) => {
    return (
        <div>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>
                        <a href={file.file_path} target="_blank" rel="noopener noreferrer">
                            {file.file_name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Files;
