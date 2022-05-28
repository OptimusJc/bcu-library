import useFirestore from "../hooks/useFirestore";

const useData = () => {
    const podcast_data = useFirestore("podcasts");

    return [podcast_data];
};

export default useData;
