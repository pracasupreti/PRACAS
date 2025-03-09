import React from "react";

function Sample2() {
  return (
    <div className="max-w-3xl mx-auto p-6 border border-gray-300 shadow-lg">
      <div className="flex gap-6">
        <img
          src="/src/assets/cv/pracas.png"
          alt="profile"
          className="w-48 h-48 object-cover"
        />
        <div>
          <div className="mt-4 mb-6 uppercase">
            <h1 className="text-4xl font-bold">
              Paracas upreti
            </h1>
            <p className="text-lg text-gray-600">Founder</p>
          </div>
          <div className="border-y border-gray-300  w-[500px] text-xs text-gray-800 pt-2 -pb-1">
            <p>1234 street name, town/city, state/country, post/zip 012345</p>
            <ul className="flex gap-2 mt-1 text-sm ms-[-35px]">
              <li className="flex items-center">
                <i className="bi bi-phone mr-1" /> +123 4567 8953
              </li>
              <li>|</li>
              <li className="flex items-center">
                <i className="bi bi-envelope mr-1" /> example@example.com
              </li>
              <li>|</li>
              <li className="flex items-center">
                <i className="bi bi-globe mr-1" /> www.example.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        <div className="w-1/3 border-r border-gray-300 pr-6">
          <div className="mt-6 border-b border-gray-300 pb-6">
            <h3 className="text-lg font-bold mb-4">EDUCATION</h3>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mb-4">
                <p className="text-sm">February 2019 <br />
                <span className="text-base font-bold">ENTER YOUR DEGREE</span> <br />
                <span className="text-sm">University / College</span> <br />
                <span className="text-xs text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold">SKILLS</h3>
            <ul className="list-disc ml-5 mt-3 text-base text-gray-700">
              <li>Microsoft Office</li>
              <li>Video Creation</li>
              <li>Networking</li>
              <li>Medical Billing</li>
              <li>Database Software</li>
              <li>Digital Media</li>
              <li>Accounting Software</li>
            </ul>
          </div>
        </div>

        <div className="w-2/3">
          <div className="pb-6 border-b border-gray-300">
            <h3 className="text-lg font-bold">PROFILE</h3>
            <p className="text-sm text-gray-700 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              aut vero minima sapiente perferendis itaque quo amet id corrupti
              illum! Nisi laborum consequatur quisquam at dolor, sint modi quis
              facilis!
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold">WORK EXPERIENCE</h3>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mt-6 pb-4 border-b border-gray-300">
                <p className="text-sm">
                  2014 - 2016 <br />
                  <span className="text-base font-bold">Company Name</span> <br />
                <span className="text-lg font-bold">ENTER YOUR JOB POSITION / TITLE</span><br />
                <span className="text-sm text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In deleniti explicabo eos aliquid expedita voluptates harum et nobis ab dolorem veniam officiis dolore ea, alias illo ipsum ipsam nam nisi!
                </span>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
                  <li>Massa dapibus faucibus nulla porttitor erat lorem.</li>
                  <li>Sit amet tempor diam ante amet nisi suspendisse cursus.</li>
                  <li>Est ultricies nulla sit amet tempor diam.</li>
                </ul>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sample2;
