const CardButtons = ({ svn_url }) => {
    return (
        <div className="d-grid gap-2 d-md-block">
            <a
                href={`${svn_url}/archive/master.zip`}
                className="btn btn-outline-secondary mx-2"
            >
                <i className="fab fa-github" /> Clone Project
            </a>
            <a href={svn_url} target=" _blank" className="btn btn-outline-secondary mx-2">
                <i className="fab fa-github" /> Repo
            </a>
        </div>
    );
};

export default CardButtons;