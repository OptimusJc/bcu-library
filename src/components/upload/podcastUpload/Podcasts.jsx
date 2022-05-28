import React from "react";

const Podcasts = () => {
    return (
        <>
            <div className="mb-3" style={{ width: "200px" }}>
                <label
                    htmlFor="collectionSelect"
                    className="form-select-label mb-1"
                >
                    Choose Podcasts group
                </label>
                <select
                    id="collectionSelect"
                    className="form-select form-select-sm mb-3"
                    aria-label=".form-select-lg example"
                >
                    <option value="featured">Featured</option>
                    <option value="founders">Founders</option>
                    <option value="minister1">Minister1</option>
                    <option value="minister2">Minister2</option>
                    <option value="others">Others</option>
                </select>
            </div>
        </>
    );
};

export default Podcasts;
