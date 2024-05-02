

function Footer() {
  return (
    <div className="bg-[--secondary] text-black py-4 text-center  " style={{ width: "100vw", margin: 0 }}>

      <div className=" w-full text-center ">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TutorTank. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Disclaimer: This website is for demonstration of TutorTank and does not represent real services or offers. It is intended solely for showcasing the capabilities of the EduMate platform. Any resemblance to actual products, services, or events is purely coincidental
        </p>
        <div className="mt-4">
          <a href="#" className="text-gray-300 hover:text-white mr-4">About Us</a>
          <a href="#" className="text-gray-300 hover:text-white mr-4">Contact Us</a>
          <a href="#" className="text-gray-300 hover:text-white mr-4">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
