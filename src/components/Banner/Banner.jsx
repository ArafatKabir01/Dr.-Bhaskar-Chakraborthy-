// import doctorImg from '../../Assets/dr.baskar.png'
import Image from 'next/image';
export const Banner = () => {
    return (
        <div className='bg-[#E6F7FC] '>
            <div className=" h-screen  mx-auto grid grid-cols lg:grid-cols-2 justify-items-center content-center py-96">

                <div className='text-center lg:text-left flex items-center w-full lg:w-7/12 justify-end mt-[]'>
                    <div className=''>
                        <h1 className="text-2xl lg:text-4xl font-bold">Compassionate Cancer Care: Expert Treatment by a Trusted Oncologist</h1>
                        <p className="py-6">An Oncology Specialist</p>
                        <button className="btn btn-accent">Book An Appointment</button>
                    </div>
                </div>
                <div className='flex items-end '>
                    <Image alt="Doctor's image"
                        // src={doctorImg}
                        className="rounded-lg w-full h-[500px] lg:h-[750px]"
                    />
                </div>

            </div>
        </div>
    )
}
