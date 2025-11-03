import { useRef, useState, useEffect } from 'react';
import Button from './Button';
import uploadIcon from '../assets/upload.svg';

export default function Upload() {
    const inputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    function onFileChange(e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setPreview(url);
    }

    // cleanup object URL when component unmounts or preview changes
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <div className="upload-img">
            <label htmlFor="input-file" id="drop-area">
                <input
                    type="file"
                    accept="image/*"
                    id="input-file"
                    hidden
                    ref={inputRef}
                    onChange={onFileChange}
                />
                <div
                    className="img-view"
                    style={
                        preview
                            ? { backgroundImage: `url(${preview})`, border: 'none' }
                            : {}
                    }
                >
                    {!preview && (
                        <>
                            <img src={uploadIcon} alt="Upload" />
                            <p>
                                Drop Image Here
                                <br />
                                <span>-or-</span>
                                <br />
                                Click to Upload
                            </p>
                        </>
                    )}
                </div>
            </label>
            <Button onClear={() => setPreview(null)} onPredict={() => { /* add predict logic here */ }} />
        </div>
    );
}