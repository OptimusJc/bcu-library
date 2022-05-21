import { useState } from "react";
import Progress from "../progress/Progress";

const UploadForm = () => {
    // const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    // const [collectionName, setCollectionName] = useState("");

    // * Trial 1 gets single files [start]
    const onChangeHandler = (e) => {
        // * Get the single file selected
        const selected = e.target.files[0];

        // console.log(selected);

        // * file types
        const types = ["audio/mpeg", "audio/mp3", "video/mp4", "video/mpeg"];
        // const types = ["application/pdf", "application/epub+zip"];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an audio or video file");
            // setError("Please select a pdf or epub file");
        }
    };
    // * [end]

    // * Trial 2
    // const radios = document.querySelectorAll("input[type='radio']");

    // const onChangeHandler = (e) => {
    //     // Take in selected files
    //     const filesSelected = e.target.files;
    //     filesSelected.map((file) => {
    //         console.log(file);
    //     });

    //     const fileTypes = ["pdf", "epub"];
    //     const audioTypes = ["mp3", "mpeg", "mp4"];

    //     radios.forEach((radio) => {
    //         if (!radio.checked) {
    //             setError("You need to to choose a collection!");
    //         } else if (radio.value === "ebooks") {
    //             if (fileTypes.includes(radio.type)) {
    //             } else {
    //                 setError("Allowed file types include [epub,pdf]");
    //             }
    //         } else if (radio.value === "podcasts") {
    //             if (audioTypes.includes(radio.type)) {
    //                 filesSelected.map((fileSelected) => {
    //                     console.log(fileSelected);
    //                 });
    //             } else {
    //                 setError("Allowed file types include [mp3, mpeg, mp4]");
    //             }
    //         }
    //     });

    // Array.from(filesSelected).map((fileSelected) => {

    // });

    // Choose a collection to upload to

    // Set the files array

    // Set the collection
    // };

    return (
        <form>
            <input
                type="file"
                id="fileInput"
                onChange={onChangeHandler}
                multiple
            />

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="ebookCollection"
                    value="ebooks"
                />
                <label className="form-check-label" htmlFor="ebookCollection">
                    Ebooks
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="podcastCollection"
                    value="podcasts"
                />
                <label className="form-check-label" htmlFor="podcastCollection">
                    Podcasts
                </label>
            </div>

            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && (
                    <div>
                        {/* {files.map((file) => {
                            return <p>{file.name}</p>;
                        })} */}
                        {file.name}
                    </div>
                )}
                {/* {collectionName && <div>{`${collectionName}`}</div>} */}
                {file && <Progress file={file} setFile={setFile} />}
            </div>
            <input
                type="submit"
                value="upload"
                // onSubmit={callOtherFunctions}
            />
        </form>
    );
};

export default UploadForm;
