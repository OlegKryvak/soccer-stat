import { useTranslation } from "react-i18next";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { BasicRoutes } from "./routes";

const App = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <BasicRoutes />
    </MainLayout>
  );
};

export default App;
