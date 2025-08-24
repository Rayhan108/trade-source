import Image from 'next/image';
import suspense from '../../../assests/Suspension.png'

const DoneVerification = () => {
    return (
        <div className='bg-white min-h-screen'>
                 <div className="mb-8 border-b border-black p-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Verify Your License
            </h1>
          </div>
        <div className='flex flex-col justify-center items-center'>
            <Image className='w-44' src={suspense} alt="" width={500} height={500}/>
            <h1 className='text-xl font-bold'>Verification Complete</h1>
            <p className='text-sm my-3'> Your licensed has been securely verified. You are an expert contractor of YTS now!</p>
        </div>
        </div>
    );
};

export default DoneVerification;