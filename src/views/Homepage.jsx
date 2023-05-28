import { Decrement, Increment, courseName } from "../components/Variables";

const HomePage = () => {
    return (
        <>
            <Increment />
            <hr />
            {courseName}
            <hr />
            <Decrement />
        </>
    );
}

export default HomePage;