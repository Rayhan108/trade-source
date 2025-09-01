"use client";

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useGetAllreferClaimedQuery,
  useReferClaimMutation,
  useReferHistoryQuery,
  useSendReferalMutation,
} from "@/redux/features/refer/referApi";
import { useGetSpecefiqUserQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { message } from "antd";

import { useForm } from "react-hook-form";
import { HiMail } from "react-icons/hi";
// const referrals = [
//   { name: "Amy", status: "Referred", reward: "$10 credit", claimed: false },
//   { name: "Amy", status: "Referred", reward: "$10 credit", claimed: true },
//   { name: "Amy", status: "Referred", reward: "$10 credit", claimed: true },
//   { name: "Amy", status: "Referred", reward: "$10 credit", claimed: true },
// ];

export default function ReferalPage() {
  const [claim] = useReferClaimMutation();
  const { data: referHistory, refetch } = useReferHistoryQuery(undefined);
  const { data: allClaimed, refetch: allClaimedRefetch } =
    useGetAllreferClaimedQuery(undefined);

  const totalClaimedCredit =
    allClaimed?.data?.reduce(
      (sum: number, item: any) => sum + (item?.amountCents || 0),
      0
    ) || 0;

  // Convert to dollars if needed
  const totalCreditsInDollars = totalClaimedCredit / 100;
  // console.log("refer claimed in dollar---->", totalCreditsInDollars);
  const refferedBy = referHistory?.data?.referredItem;

  const refferals = referHistory?.data?.referrerItems;

  // console.log("referal------->",refferals);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sendMail] = useSendReferalMutation();
  const user = useAppSelector(selectCurrentUser);
  const { data: specUser } = useGetSpecefiqUserQuery(user?.user?.userId);
  // console.log("single user--->", specUser?.data);

  // const [copied, setCopied] = useState(false);
  // const referralLink = "Md Rayhan Shorker";

  const onSubmit = async (data) => {
    // console.log("data-->", data);
    const modifyData = {
      email: data?.email,
      code: specUser?.data?.refercode,
    };
    try {
      const res = await sendMail(modifyData).unwrap();
      console.log("response--->", res);
      if (res?.success) {
        message.success(res?.message);
      } else {
        message.error(res?.message);
      }
    } catch (error) {
      message.error(error?.message);
    }
  };

  const handleClaimRefer = async (data) => {
    // console.log("data--------->",data);
    const modifiedData = {
      relatedUserId: data?.relatedUser,
      type: data?.type,
    };
    try {
      const res = await claim(modifiedData).unwrap();
      // console.log("response--->", res);

      if (res?.success) {
        message.success(res?.message);
        refetch();
        allClaimedRefetch();
      } else {
        message.error(res?.message);
      }
    } catch (error) {
      message.error(error?.message);
    }
  };

  return (
    <div>
      <div className="w-full min-h-screen  py-3 max-w-7xl  mx-auto bg-[#ffffff] rounded-xl  px-4 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Referral</h1>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 mb-8"></div>
        <div className=" ">
          <div className="  items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  At YourTradeSource (YTS), we believe great work is worth
                  sharing. Refer a friend, and you both earn rewards!
                </p>

                <p className="text-gray-700 text-lg mb-4 font-medium">
                  Here&apos;s how it works:
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Your friend gets $10 off their first completed service.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      You get a $10 credit toward your next service once they
                      complete their first task.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Email Input Section */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="Enter email address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^@]+@[^@]+\.[^@]+$/,
                            message: "Invalid email format",
                          },
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
                    >
                      Send Invitation
                    </button>
                  </div>
                  {/* Error message */}
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {typeof errors.email.message === "string" &&
                        errors.email.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className=" w-full pt-3">
            <div className="flex gap-5 justify-end font-inter">
              <p className="text-md">Your Total Credits :</p>
              <p>${totalCreditsInDollars}</p>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Referral History
            </h2>
            <div className="space-y-4">
              {refferedBy && (
                <div className="flex items-center justify-between text-sm text-gray-700">
                  {/* Green Check & Name */}
                  <div className="flex items-center gap-2 min-w-[100px]">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </span>
                    <span className="font-semibold">{refferedBy?.name}</span>
                  </div>

                  {/* Status */}
                  <span className="w-[80px]">{refferedBy?.type}</span>

                  {/* Reward */}
                  <span className="w-[100px]">{refferedBy?.amount}</span>

                  {/* Button */}
                  {refferedBy?.status === "claimed" ? (
                    <button className="bg-gray-200 text-gray-500 px-4 py-1 rounded-md cursor-not-allowed">
                      Claimed
                    </button>
                  ) : (
                    <button
                      className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700"
                      onClick={() => handleClaimRefer(refferedBy)}
                    >
                      Claim
                    </button>
                  )}
                </div>
              )}
              {refferals?.map((ref, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-sm text-gray-700"
                >
                  {/* Green Check & Name */}
                  <div className="flex items-center gap-2 min-w-[100px]">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </span>
                    <span className="font-semibold">{ref.name}</span>
                  </div>

                  {/* Status */}
                  <span className="w-[80px]">{ref.type}</span>

                  {/* Reward */}
                  <span className="w-[100px]">{ref.amount}</span>

                  {/* Button */}
                  {ref.status === "claimed" ? (
                    <button className="bg-gray-200 text-gray-500 px-4 py-1 rounded-md cursor-not-allowed">
                      Claimed
                    </button>
                  ) : (
                    <button
                      className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700"
                      onClick={() => handleClaimRefer(ref)}
                    >
                      Claim
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
