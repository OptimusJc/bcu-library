import { useState } from "react";
import Progress from "../progress/Progress";

const filess = [
    {
        name: "Apostle.-Dr.-Mariah-2.mp3",
        url: "https://firebasestorage.googleapis.com/v0/b/bcu-library.appspot.com/o/podcasts%2Fundefined?alt=media&token=6af03b6e-0d22-401f-9a60-71a35d3ffc7b",
        date: "May 14, 2022",
    },
    {
        name: "Apostle.-Dr.-Mariah-2.mp3",
        url: "https://firebasestorage.googleapis.com/v0/b/bcu-library.appspot.com/o/podcasts%2Fundefined?alt=media&token=6af03b6e-0d22-401f-9a60-71a35d3ffc7b",
        date: "May 14, 2022",
    },
];

const UploadForm = () => {
    // const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    // const [collectionName, setCollectionName] = useState("");

    const onChangeHandler = (e) => {
        // * Get the file selected
        const selected = e.target.files[0];
        console.log(
            `All files selected for upload: ${Array.from(e.target.files).map(
                (file) => file
            )}`
        );
        // const arraySelected = Array.from(selected);

        // * file types
        const types = ["audio/mpeg", "audio/mp3", "video/mp4", "video/mpeg"];

        if (selected && types.includes(selected.type)) {
            // arraySelected.forEach((docFile) => {
            //     if (types.includes(docFile.type)) {
            //         setFiles(files.push(docFile));
            //     }
            // });
            setFile(selected);

            setError("");
        } else {
            setFile(null);
            setError("Please select an audio or video file");
        }
    };
    // const changeCollection = () => {
    //     const radios = document.getElementsByName("flexRadioDefault");

    //     for (let i = 0; i < radios.length; i++) {
    //         if (radios[i].checked) {
    //             setCollectionName(radios[i].value);
    //             break;
    //         }
    //     }
    // };

    // const callOtherFunctions = () => {
    //     changeCollection();
    //     onChangeHandler();
    // };

    // const callOtherFunctions = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const error = false;

    //             if (!error) {
    //                 resolve();
    //             } else {
    //                 reject(`Something went wrong!`);
    //             }
    //         }, 100);
    //     });
    // };

    // callOtherFunctions()
    //     .then(changeCollection, onChangeHandler)
    //     // .then(onChangeHandler)
    //     .catch((err) => console.log(`::${err}`));

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
