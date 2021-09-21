import RootContext from "./contexts/RootContext";
import Router from "./Router";
import SnackBar from "./SnackBar";

function App() {
  return (
    <div>
      <RootContext>
        <SnackBar>
          <Router />
        </SnackBar>
      </RootContext>
    </div>
  );
}

export default App;
