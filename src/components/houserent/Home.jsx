import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  // State to manage QR code scan status
  const [isQRCodeScanned, setQRCodeScanned] = useState(false);

  // Function to simulate QR code scan
  const handleQRCodeScan = () => {
    setQRCodeScanned(true);  // Simulate QR scan by setting the state to true
  };

  return (
    <div className="text-center">
      <h1 className="mt-4">2BHK</h1>
      <h1>Contact Number: 9876543211</h1>
      <h1>2ND FLOOR</h1>

      {/* Simulate QR code scan with an image click */}
      <img
        src="https://www.qr-code-generator.com/wp-content/themes/qr/images/banners/frames/websiteQRCode_noFrame.png"
        className="w-25"
        alt="QR Code"
        onClick={handleQRCodeScan}  // Clicking on the image simulates QR code scan
      />
      <p>Click the QR code image to simulate scanning.</p>

      {/* Show the Details link only if QR code is scanned */}
      {isQRCodeScanned && (
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="details">
              Details
            </Link>
          </li>
        </ul>
      )}

      {/* This Outlet will render the Details component when the user navigates to /details */}
      <Outlet />
    </div>
  );
}

export default Home;
