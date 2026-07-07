// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";

// import { Contact } from "./pages/Contact";
// import Home from "./pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;

import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact";
import Preloader from "./components/Preloader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return <RouterProvider router={router} />;
};

export default App;