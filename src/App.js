import "./App.scss";
import RespondingToEvents from "./components/RespondingToEvents";
import RespondingToEventsClass from "./components/RespondingToEventsClass";


function App() {
    return (
        <div className="text-center">
            <RespondingToEventsClass />
            <hr />
            <RespondingToEvents />
        </div>
    );
}

export default App;
