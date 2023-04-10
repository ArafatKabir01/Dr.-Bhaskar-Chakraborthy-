import doctorImg from '../../Assets/dr.baskar.png'
import Image from 'next/image';
export const Banner = () => {
    return (
        <div>
            <div className="bg-[#E6F7FC] min-h-screen relative ">
                <div className=' absolute inset-x-0 bottom-0 flex justify-between   mx-auto'>
                    <div className='text-center grid content-center'>
                        <div className='w-8/12 justify-self-end'>
                            <h1 className="text-2xl lg:text-5xl font-bold">Compassionate Cancer Care: Expert Treatment by a Trusted Oncologist</h1>
                            <p className="py-6">An Oncology Specialist</p>
                            <button className="btn btn-accent">Book An Appointment</button>
                        </div>

                    </div>
                    <div className='w-6/12'>
                        <Image alt="Alternative text for the image"
                            width={630}
                            height={865}
                            src={doctorImg}
                            className="rounded-lg "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
