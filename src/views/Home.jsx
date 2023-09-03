import SiteNav from "../layout/SiteNav";
import { useSelector } from "react-redux";
export default function Home() {

    const countState = useSelector((state) => console.log(state))

    return (
        <div className="mainContent">
            <SiteNav />
            {countState}
            <h2>Home</h2>
        </div>
    )
}
