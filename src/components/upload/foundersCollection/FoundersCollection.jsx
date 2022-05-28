const FoundersCollection = () => {
    return (
        <>
            <div className="mb-3">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="lamarcoSubCollection"
                    value="lamarco"
                />
                <label
                    className="form-check-label"
                    htmlFor="lamarcoSubCollection"
                >
                    Apostle La Marco
                </label>
            </div>
            <div className="mb-3">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="mariahSubCollection"
                    value="mariah"
                />
                <label
                    className="form-check-label"
                    htmlFor="mariahSubCollection"
                >
                    Apostle Mariah
                </label>
            </div>
        </>
    );
};

export default FoundersCollection;
