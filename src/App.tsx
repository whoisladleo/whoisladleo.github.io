import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Automation from "./pages/Automation";
import HostingPlans from "./pages/HostingPlans";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/hosting-plans" element={<HostingPlans />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;
