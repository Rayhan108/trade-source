"use client";

import { useContractorSubPurchaseMutation} from "@/redux/features/user/userApi";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { message } from "antd";
import { useAppSelector } from "@/redux/hooks";
import {selectTotalCredit } from "@/redux/features/refer/referSlice";


const ContractorCheckoutPage = () => {
  const [subPurchase] = useContractorSubPurchaseMutation();


  
  const totalCredits=useAppSelector(selectTotalCredit)
  
  const searchParams = useSearchParams();
const router=useRouter()
  const pricingId = searchParams.get("pricingId");
  const monthlyValue = parseFloat(searchParams.get("monthlyValue")) || 0;
  const yearlyValue = parseFloat(searchParams.get("yearlyValue")) || 0;

  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handlePurchase = async () => {
//     const price = selectedPlan === "monthly" ? monthlyValue : yearlyValue;
//     console.log("price--->",price);
//      // apply credits before purchase
//   if (totalCredits > 0) {
//     const appliedCredit = Math.min(price,totalCredits);
//     // subscription fee theke subtract
//     const finalPrice = price-appliedCredit;
// console.log("applied credit------>",appliedCredit);
// console.log("applied credit------>",appliedCredit);
//     // redux theke credit redeem kore felbo
//     dispatch(redeemCredit(appliedCredit));

//     console.log(`Applied credit: $${appliedCredit}, Final price: $${finalPrice}`);
    
   
//     const payload = {
//       item: {
//         pricingId,
//         price: finalPrice,
//         plan: selectedPlan,

//       },
//     };
//   }




    const payload = {
      item: {
        pricingId,
        price: selectedPlan === "monthly" ? monthlyValue : yearlyValue,
        plan: selectedPlan,
      },
    };

    try {
      const res = await subPurchase(payload).unwrap();

      if (res.success) {
        message.success(`${res.message}. Pay now...`);
        router.push(res?.data?.url);
      }
    } catch (error) {
      message.error(error?.data?.message || "Something went wrong");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Choose Your Plan
        </h2>
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
        Total credit :{totalCredits}
        </h2>

        {/* Plan Selection */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setSelectedPlan("monthly")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedPlan === "monthly"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Monthly – ${monthlyValue}
          </button>
          <button
            onClick={() => setSelectedPlan("yearly")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedPlan === "yearly"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Yearly – ${yearlyValue}
          </button>
        </div>

        {/* Plan Summary Section */}
        <div className="bg-gray-50 p-6 rounded-xl mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Plan Summary
          </h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Selected Plan</span>
            <span className="font-medium capitalize">{selectedPlan}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Price</span>
            <span className="text-lg font-bold text-gray-900">
              $
              {selectedPlan === "monthly"
                ? monthlyValue.toFixed(2)
                : yearlyValue.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            All payments are processed securely through{" "}
            <span className="font-medium text-blue-600">Stripe</span>.
          </p>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3 mb-6">
          <SiTicktick className="text-green-500 mt-1" size={22} />
          <p className="text-gray-600 text-sm leading-relaxed">
            By purchasing, you agree to automatic renewal of your membership and
            accept all{" "}
            <span className="text-blue-600 underline cursor-pointer">
              terms & conditions
            </span>
            .
          </p>
        </div>

        {/* Purchase Button */}
        <button
          onClick={handlePurchase}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-md"
        >
          Purchase Membership
        </button>
      </div>
    </div>
  );
};

export default ContractorCheckoutPage
