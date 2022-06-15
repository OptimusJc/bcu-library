import { useState } from "react";
import Progress from "../progress/Progress";
import UploadInput from "./UploadInput/UploadInput.jsx";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

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

    // const [collection, setCollection] = useState("");

    // // refrence the collection radio
    // const radioCollection = document.querySelectorAll(
    //     'input[name="flexRadioDefault"]'
    // );

    // radioCollection.forEach((collection) => {
    //     collection.addEventListener("click", (e) => {
    //         if(e.target)
    //     });
    // });

    return (
        <div className="container">
            <div className="row">
                <div
                    className="col"
                    style={{ height: "500px", marginTop: "2rem" }}
                >
                    <form>
                        <h3>Upload Section</h3>
                        <p className="lead">Choose a collection to upload to</p>

                        <div className="mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="ebookCollection"
                                value="ebooks"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="ebookCollection"
                            >
                                Ebooks
                            </label>
                        </div>
                        <div className="mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="podcastCollection"
                                value="podcasts"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="podcastCollection"
                            >
                                Podcasts
                            </label>
                        </div>

                        <UploadInput onChange={onChangeHandler} />

                        {/* *output feedback */}
                        <div className="output">
                            {error && <div className="error">{error}</div>}
                            {file && <div>{file.name}</div>}

                            {file && <Progress file={file} setFile={setFile} />}
                        </div>
                        <input
                            type="submit"
                            value="upload"
                            className="btn btn-primary mt-4"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadForm;
