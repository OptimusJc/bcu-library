import useStorage from "../hooks/useStorage";
import { useEffect } from "react";
import styles from "./progress.module.css";

const Progress = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <div
            className={[styles.progress_bar]}
            style={{ width: progress + "%" }}
        ></div>
    );
};

export default Progress;
