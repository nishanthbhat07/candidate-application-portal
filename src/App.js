import "./App.css";
import AppLayout from "./layout/AppLayout";
import SearchJobs from "./views/search-jobs";

function App() {
  return (
    <div>
      <AppLayout>
        <SearchJobs />
      </AppLayout>
    </div>
  );
}

export default App;
