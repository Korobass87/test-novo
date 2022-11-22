import { Header } from "./components/header";
import { ProjectNav } from "./components/project-nav";
import { Works } from "./components/works";
import "./index.css";

function App() {
    return (
        <div className="App">
            <Header />
            <main className={"main"}>
                <ProjectNav />
                <Works />
            </main>
        </div>
    );
}

export default App;
