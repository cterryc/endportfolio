import { useState, useCallback, useEffect } from "react";

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
    const [updated_at, setUpdated_at] = useState("0 mints");

    const handleUpdatetime = useCallback(() => {
        const date = new Date(pushed_at);
        const nowdate = new Date();
        const diff = nowdate.getTime() - date.getTime();
        const hours = Math.trunc(diff / 1000 / 60 / 60);

        if (hours < 24) {
            if (hours < 1) return setUpdated_at("just now");
            let measurement = hours === 1 ? "hour" : "hours";
            return setUpdated_at(`${hours.toString()} ${measurement} ago`);
        } else {
            const options = { day: "numeric", month: "long", year: "numeric" };
            const time = new Intl.DateTimeFormat("en-US", options).format(date);
            return setUpdated_at(`on ${time}`);
        }
    }, [pushed_at]);

    useEffect(() => {
        handleUpdatetime();
    }, [handleUpdatetime]);

    return (
        <p className="card-text">
            <a
                href={repo_url + "/stargazers"}
                target=" _blank"
                className="text-dark text-decoration-none"
            >
                <span className="text-dark card-link mr-4">
                    <i className="fab fa-github" /> Stars{" "}
                    <span className="badge badge-dark">{star_count}</span>
                </span>
            </a>
            <small className="text-muted">Updated {updated_at}</small>
        </p>
    );
};

export default CardFooter;