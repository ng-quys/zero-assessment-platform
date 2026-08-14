import "./App.css";
import MainLayouts from "./layouts/MainLayouts";
import DashboardPage from "./pages/teacher/DashboardPage";

function App() {
  return (
    <MainLayouts>
      <DashboardPage />
    </MainLayouts>
  );
}

export default App;