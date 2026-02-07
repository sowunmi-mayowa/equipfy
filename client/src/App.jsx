import React, { Suspense } from "react";
import Navbar from "./componennts/Navabar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  Link,
} from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Lazy-loaded routes for code-splitting
const Buy = React.lazy(() => import("./routes/Buy"));
const Sell = React.lazy(() => import("./routes/Sell"));
const About = React.lazy(() => import("./routes/About"));
const Kobelco = React.lazy(() => import("./pages/Kobelco"));
const Loan = React.lazy(() => import("./routes/Loan"));
const LoanForm = React.lazy(() => import("./routes/LoanForm"));
const BuyCategories = React.lazy(() => import("./componennts/BuyCategories"));
const Home = React.lazy(() => import("./componennts/Home"));

import { FaWhatsapp } from "react-icons/fa";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/buy">
          <Route path="/buy" element={<Buy />} />
          <Route path="/buy/equipments/:category" element={<BuyCategories />} />
          <Route
            path="/buy/equipments/:category/:make"
            element={<BuyCategories />}
          />
          <Route path="/buy/Kobelco" element={<Kobelco />} />
        </Route>
        <Route path="/sell" element={<Sell />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/loan-form" element={<LoanForm />} />
      </Route>,
    ),
  );
  return (
    <div>
      <Suspense
        fallback={<div className="w-full text-center py-8">Loading…</div>}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Suspense>
    </div>
  );
}
const Root = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <div className="fixed inline-block p-2 rounded-full bg-eYellow bottom-4 right-4 ">
        <Link to="https://wa.me/+2347026701092" target="_blank">
          <FaWhatsapp className="text-4xl cursor-pointer bg-eYellow" />
        </Link>
      </div>
    </div>
  );
};

export default App;
