import useFirestore from "../hooks/useFirestore";

const useData = () => {
    const docs = useFirestore("podcasts");

    return docs;
};

export default useData;
