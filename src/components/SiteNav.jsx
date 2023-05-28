const SiteNav = () => {
    var myCourse = "React course in function";
    var course = {
        src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    };
    return (
        <>
            <div className="siteNav">
                <h2>This is site nav</h2>
                {myCourse}
            </div>
            <span>I am span</span>
            <video src={course.src}></video>
        </>
    );
};

export default SiteNav;

// rfc
