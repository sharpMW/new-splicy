import React from 'react'
import "./Description.css"

const TeamSection = (props) => {
  return (
    <div className='min-h-fit'>
      <h2 className="text-center text-6xl font-semibold font-heading">Meet the Team</h2>
      <div className="teams">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a
                  href="/"
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-72 h-64 block"
                    src="/team1.jpg"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-white text-2xl text-center font-medium title-font mb-1">
                    Swayam Ambastha
                  </h3>
                  <h2 className="text-white title-font text-lg text-center text-lg font-medium">
                    Developer
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a
                  href="/"
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-72 h-64 block"
                    src="/team2.jpg"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-white text-2xl text-center font-medium title-font mb-1">
                    Name
                  </h3>
                  <h2 className="text-white title-font text-center text-lg text-lg font-medium">
                    Developer
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a
                  href="/"
                  className="block relative h-48 text-center rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-72 h-64 block"
                    src="/team3.jpg"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-white text-2xl text-center font-medium title-font mb-1">
                    Name
                  </h3>
                  <h2 className="text-white title-font text-center text-lg text-lg font-medium">
                    Developer
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a
                  href="/"
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-72 h-64 block"
                    src="/team4.jpg"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-white text-2xl text-center font-medium title-font mb-1">
                    Name
                  </h3>
                  <h2 className="text-white title-font text-center text-lg text-lg font-medium">
                    Developer
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}




export default TeamSection;
