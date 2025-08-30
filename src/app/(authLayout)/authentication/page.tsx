import Image from 'next/image';
import backgroundImg from '@/assests/bannerImg.jpg';
import logo from '@/assests/YL 2.png';
import Link from 'next/link';
export default function AuthenticationPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src={backgroundImg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0  flex items-center justify-center p-3">
        {/* Login Box */}
        <div className="bg-white bg-opacity-80 px-20 py-8 sm:px-36 sm:py-12  rounded-md shadow-md  max-w-full text-center">
          {/* Logo and Title */}
          <div className="flex items-center justify-center mb-6 space-x-2">
            <div className="text-blue-600 font-bold text-lg">
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={100}
                className="h-12 w-36"
              />
            </div>
            <div className="text-blue-600 font-semibold text-xl md:text-3xl sm:text-2xl lg:text-4xl">
              Your Trade Source
            </div>
          </div>

          {/* Buttons */}
          <Link href={'/signIn'}>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-2">
              Sign In
            </button>
          </Link>
          <Link href={'/signUp'}>
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-100 transition">
              Sign Up
            </button>
          </Link>

          {/* Terms */}
          <p className="text-xs text-black mt-4">
            By signing in you agree to our Terms of Use and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
