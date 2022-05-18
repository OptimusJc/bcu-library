import Button from "../../components/buttons/Button";
import styles from "./download.module.css";

// hook imports
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { fireStorage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import Axios from "axios";

const Download = () => {
    let { id } = useParams();
    const location = useLocation();
    const fileDownload = require("js-file-download");

    // * Get data from the file using useLocation hook from react
    const title = location.state.document_title.title.split(".")[0];
    const title_url = location.state.document_url.path;

    const download = () => {
        const httpReference = ref(fireStorage, title_url);

        // console.log(httpReference);

        getDownloadURL(httpReference)
            .then((url) => {
                // This can be downloaded directly:
                // const xhr = new XMLHttpRequest();
                // xhr.responseType = "blob";
                // xhr.onload = (event) => {
                //     const blob = xhr.response;
                //     fileDownload(blob, `${title}.mp3`);
                // };
                // xhr.open("GET", url);
                // xhr.send();

                Axios.get(url, {
                    responseType: "blob",
                }).then((res) => {
                    fileDownload(res.data, `${title}.mp3`);
                });

                // const file = document.createElement("a");
                // if (file.download !== undefined) {
                //     file.setAttribute("href", url);
                //     file.setAttribute("target", "_blank");
                //     file.style.visibility = "hidden";
                //     document.body.appendChild(file);
                //     file.click();
                //     document.body.removeChild(file);
                // }
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
