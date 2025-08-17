'use client'

import { useForm } from "react-hook-form";
import { Input } from 'antd'

import "react-phone-input-2/lib/style.css";

import Link from "next/link";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentContractor } from "../../../redux/features/contractor/contractorSlice";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
const YourDetailsPage = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log("user-->",user);
  const contractorData = useAppSelector(selectCurrentContractor);
  console.log("contractor data---->",contractorData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {

    console.log("Form Data:", data);
  }
    return (
        <>
             {/* Header */}
      <div className=" max-w-4xl mx-auto  flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mt-5">Basic Details About You</h1>

      </div> 
 <div className="w-full max-w-4xl mx-auto my-8 rounded-md bg-white p-6">

  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-8 py-8">

    {/* Form Fields */}
    <div className="flex-1 space-y-4">
      <div className="">

        <div>
          <label className="block text-sm font-bold mb-3 mt-5">Company Name</label>
          <Input
            {...register("companyName", { required: "First name is required" })}
            placeholder="Bessie"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName.message}</p>
          )}
        </div>
  
      </div>

      <div>
        <label className="block text-sm font-bold mb-3 mt-5">Email Address</label>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          placeholder="abc@gmail.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

          

<div className="">
              <label className="block text-sm font-bold mb-3 mt-5">Company size,employees</label>
              <div className="flex gap-8 max-w-3xl mx-auto">
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">Self-employed, Sole propitor</button>
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">2-10 Person</button>
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">11-50 Person</button>
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">51-200 Person</button>
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">200+</button>
              </div>
</div>
<div>
    <Link href={'/maxLead'}>

        <button htmlType="submit" className="bg-blue-600 py-2  text-white w-full rounded-xl">
   Continue
        </button>
</Link>

</div>
    </div>
  </form>


    </div>
        </>
    );
};

export default YourDetailsPage;