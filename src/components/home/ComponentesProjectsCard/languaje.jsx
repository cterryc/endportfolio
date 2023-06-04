import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const Language = ({ languages_url, repo_url }) => {
    const [data, setData] = useState([]);
    const handleRequest = useCallback(async () => {
        try {
            const response = await axios.get(languages_url);
            return setData(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }, [languages_url]);

    useEffect(() => {
        handleRequest();
    }, [handleRequest]);
    const array = [];
    let total_count = 0;
    for (let index in data) {
        array.push(index);
        total_count += data[index];
    }
    return (
        <div className="pb-3">
            Languages:{" "}
            {array.length
                ? array.map((language) => (
                    <a
                        key={language}
                        className="card-link"
                        href={repo_url + `/search?l=${language}`}
                        target=" _blank"
                        rel="noopener noreferrer"
                    >
                        <span className="badge bg-light text-dark">
                            {language}:{" "}
                            {Math.trunc((data[language] / total_count) * 1000) / 10} %
                        </span>
                    </a>

                ))
                : "code yet to be deployed."}
        </div>
    );
};

export default Language;