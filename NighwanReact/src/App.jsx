import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from './pages/Homepage';
import CareerPage from './Pages/CareerPage';  
import RootLayout from './Layout/RootLayout';
import BlogPage from './Pages/BlogPage';
import BlogDetailPage from './Pages/BlogDetailPage';
import BusinessConsulting from './Pages/BusinessConsultingPage';
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/NotFound';
import PortfolioPage from './Pages/PortfolioPage';
import ServicedetailsPage from './Pages/ServicedetailsPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import Portfoliodetail from './Pages/portfolio-detail';

function App() {

  const router = createBrowserRouter([
    {
      element: <RootLayout/>,
      children : [
        {
          path:  "/",
          element: <Homepage />,
        },
        {
          path: "/about",
          element: <AboutPage/>
        },
        {
          path: "/career",
          element: <CareerPage />
        },
        {
          path: "/terms",
          element: <div>Terms and Policies</div>
        },
        {
          path: "/service-details/:type",
          element: <ServicedetailsPage/>
        },
        {
          path: "/service",
          element: <ServicePage/>
        },
        {
          path: "/blog",
          element: <BlogPage/>
        },
        {
          path: "/blog-detail",
          element: <BlogDetailPage/>
        },
        {
          
          path: "/contact",
          element: <ContactPage/>
        },
        {
          path: "/lean",
          element: <BusinessConsulting/>
        },
        {
          path: "/products",
          element: <PortfolioPage/>
        },
        {
          path: "/caseStudies",
          element: <div>Case Studies</div>
        }, 
        {
          path: "/product-detail/:type",
          element: <Portfoliodetail/>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;