import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";
import UseFormDetailsReducer from "./hooks/UseFormDetailsReducer";
import { FormDetailsContext } from "./context/FormDetailsContext";

function App() {
  const [state, dispatch] = UseFormDetailsReducer();
  return (
    <BrowserRouter>
      <FormDetailsContext.Provider value={{ state, dispatch }}>
        <PageRoutes />
      </FormDetailsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
