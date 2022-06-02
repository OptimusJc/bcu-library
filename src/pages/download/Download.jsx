import Button from "../../components/buttons/Button";
import styles from "./download.module.css";

// hook imports
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { fireStorage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { Toast } from "bootstrap";

const Download = () => {
    let { id } = useParams();
    const location = useLocation();
    const fileDownload = require("js-file-download");

    // states
    let [progress, setProgress] = useState(0);

    const title = location.state.document_title.title.split(".")[0];
    const from = location.state.from;
    let title_url = "";
    // * Get data from the file using useLocation hook from react
    if (from === "otherTitle") {
        title_url = location.state.document_url;
    } else if (from === "spiritual_ebooks") {
        title_url = location.state.document_url;
    } else {
        title_url = location.state.document_url.path;
    }

    const download = () => {
        const httpReference = ref(fireStorage, title_url);
        console.log(httpReference);

        // the toast
        const toastToShow = document.getElementById("liveToast");
        const toast = new Toast(toastToShow);
        toast.show();

        getDownloadURL(`this is the reference: ${httpReference}`)
            .then((url) => {
                // This can be downloaded directly:
                const xhr = new XMLHttpRequest();
                xhr.responseType = "blob";
                xhr.open("GET", url, true);
                xhr.send();

                // on progress
                xhr.onprogress = (e) => {
                    progress = Math.floor((e.loaded / e.total) * 100);
                    setProgress(progress);
                };

                // on complete
                xhr.onload = (e) => {
                    const blob = xhr.response;
                    fileDownload(blob, `${title}.${blob.type.split("/")[1]}`);
                };
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="container">
            <div className={["row ", styles.row].join(" ")}>
                <div
                    className={[
                        "col d-flex align-items-center justify-content-center",
                        styles.col,
                    ].join(" ")}
                >
                    <div>
                        <p className="lead fs-6 fw-normal">Title Id: {id}</p>
                        <h3 className="h3">Title: {title}</h3>
                        <p>{title}</p>
                        <Button
                            title="download "
                            classes={[
                                "btn btn-primary me-4",
                                styles.btn_primary,
                            ].join(" ")}
                            onclick={download}
                        />
                        <Button
                            title="share"
                            classes={[
                                "btn btn-outline-success",
                                styles.share,
                            ].join(" ")}
                        />

                        <div className="toast-container position-fixed bottom-0 end-0 p-3">
                            <div
                                id="liveToast"
                                className={["toast", styles.toast].join(" ")}
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true"
                                data-bs-autohide="false"
                            >
                                <div
                                    className={[
                                        "toast-header",
                                        styles.toast_header,
                                    ].join(" ")}
                                >
                                    <img
                                        src="http://via.placeholder.com/20x20"
                                        className="rounded me-2"
                                        alt="..."
                                    />
                                    <strong className="me-auto">
                                        {progress !== 100
                                            ? "Downloading..."
                                            : "Downloaded"}
                                    </strong>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="toast"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div
                                    className={[
                                        "toast-body",
                                        styles.toast_body,
                                    ].join(" ")}
                                >
                                    {/* progress bar */}
                                    <div
                                        className="progress mt-4"
                                        style={{ flexDirection: "column" }}
                                    >
                                        <div
                                            className="progress-bar progress-bar-striped "
                                            role="progressbar"
                                            style={{
                                                width: `${progress}%`,
                                                backgroundColor:
                                                    "hsl(263, 88%, 64%)",
                                            }}
                                            aria-valuenow={progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {progress}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            alt=""
                            srcSet="https://via.placeholder.com/400x300 360w, https://via.placeholder.com/420x360 700w"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;
