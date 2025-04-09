"use client";
import React, { Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/components/common/loader/Loader";
import Navbar from "@/components/layout/navbar-section/Navbar";
import { usePathname } from "next/navigation";
// import FloatingIcon from "@/components/common/floating-icon/FloatingIcon";
// import Footer from "@/components/layout/footer-section/Footer";
// Lazy load components that are not essential for initial page render
const FloatingIcon = React.lazy(() =>
  import("@/components/common/floating-icon/FloatingIcon")
);
const TaglinePopup = React.lazy(() =>
  import("@/components/common/tagline-popup/TaglinePopup")
);
const Footer = React.lazy(() =>
  import("@/components/layout/footer-section/Footer")
);

export default function Template({ children }) {
  const pathname = usePathname();
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathname !== "/go-community") {
        setShowModal(true);
      }
    }, 3000); // 3 seconds delay

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleModalClose = () => setShowModal(false);

  return (
    <div className="layout-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <main>{children}</main>
        <FloatingIcon />
        {showModal && (
          <TaglinePopup show={showModal} handleClose={handleModalClose} />
        )}
        <Footer />
      </Suspense>
    </div>
  );
}
