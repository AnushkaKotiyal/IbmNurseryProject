import React from "react";
import {useNavigate} from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();
  return (
    <>
      {/* Wrapper div for relative positioning */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="fixed inset-0 z-[-1]">
          <div className="w-full h-full bg-[url('https://www.abc4.com/wp-content/uploads/sites/4/2023/06/GardenCenter_ABC4.jpeg?w=2560&h=1440&crop=1')] bg-cover bg-center bg-no-repeat">
            {/* Dark semi-transparent overlay */}
            <div className="w-full h-full bg-black bg-opacity-50"></div>
          </div>
        </div>

        {/* Foreground Content */}
        <div className="flex justify-evenly items-center min-h-screen text-white gap-x-10">
          <div>
            <h1 className="font-semibold w-fit p-3 rounded-md lg:text-[40px] text-[20px]">
              Welcome To Our Nursery
              <br />
              <strong>Green Haven</strong>
            </h1>
            <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium" onClick={()=>navigate('/products')}>
              Get Started
            </button>
          </div>
          <div>
            <p className="text-[1.3rem] lg:w-[800px] w-[300px]">
              Green Haven, your one-stop destination for all things plants!<br/>
              Whether you're looking to brighten up your living room with
              vibrant indoor plants, create a peaceful balcony garden, or grow
              your own herbs and vegetables, we’ve got you covered. Our
              collection includes a wide variety of succulents, flowering
              plants, air-purifying greens, bonsais, and seasonal blooms — all
              carefully nurtured and ready to bring life to your space. With
              doorstep delivery, expert care tips, and eco-friendly packaging,
              we make plant parenting easy and joyful. Explore our green world
              and bring nature home today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
