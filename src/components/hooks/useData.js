import useFirestore from "../hooks/useFirestore";

const useData = () => {
    const podcast_data = useFirestore("podcasts/others/other_podcasts");

    return [podcast_data];
};

export default useData;
