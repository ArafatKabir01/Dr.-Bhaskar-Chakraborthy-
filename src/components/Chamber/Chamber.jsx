import Image from "next/image";
import React from "react";
// import hospitalImg from "../../Assets/ahsaniaMission.jpg"
// import hospitalImg2 from "../../Assets/popularDiagnostic.JPG"
export const Chamber = () => {
  return (
    <div>
      <div className=" ">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <Image
              alt="Hospital image"
              width={500}
              height={500}
              src="https://i.ibb.co/ZTkS9hG/ahsania-Mission.jpg"
              className="rounded-lg w-full h-[500px] lg:h-[750px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-5xl">Chamber at Dhaka: </h2>
            <p>Ahsania Mission Cancer And General Hospital.</p>
            <p>Plot-3, Sector-10, Uttara, Dhaka.</p>
            <p>Phone:01531-291810, 09678-016391</p>
            <p>For Appointment : 01969-596003.</p>
            <p>(8.00 AM-3.00 PM)</p>
            <p>Visiting Day:</p>
            <p>E-mail : bchakraborty383@gmail.com</p>
            <p>Tuesday,Wednesday & Thursday</p>
            <p>Time : 10.00AM -2.00PM,5.00PM -9.00PM</p>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="card lg:card-side bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title text-5xl">Chamber at Chattogram: </h2>
            <p>Popular Diagnostic Center</p>
            <p>20/B, KB Fazlul Kader Road, Panchlaish</p>
            <p>Chattogram, Phone :03 1-655401-4</p>
            <p>For Appointment :01317-694999</p>
            <p>
              Saturday, Sunday & Monday (5.00 PM 7.00 PM) , Time : 9.00 AM-2.00
              PM
            </p>
            <p>Visiting Day:</p>
            <p>E-mail : bchakraborty383@gmail.com</p>
          </div>
          <figure>
            <Image
              alt="Doctor's image"
              width={500}
              height={500}
              src="https://i.ibb.co/D9dkHkN/popular-Diagnostic.jpg"
              className="rounded-lg w-full h-[500px] lg:h-[750px]"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
