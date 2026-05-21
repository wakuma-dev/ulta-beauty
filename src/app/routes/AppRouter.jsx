import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Loaders from "../../components/common/Loaders";
import MainLayout from "../../components/layout/MainLayout";

// Lazy Pages
const Home = lazy(() => import("../../pages/Home/Home"));
const Shop = lazy(() => import("../../pages/Shop/Shop"));
const New = lazy(() => import("../../pages/New/New"));
const Discover = lazy(() => import("../../pages/Discover/Discover"));
const Brand = lazy(() => import("../../pages/Brand/Brand"));
const Sale = lazy(() => import("../../pages/Sale/Sale"));
const CheckOut = lazy(() => import("../../pages/Checkout/Checkout.jsx"))
export default function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
         <Loaders />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="new" element={<New />} />
          <Route path="discover" element={<Discover />} />
          <Route path="brand" element={<Brand />} />
          <Route path="sale" element={<Sale />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
