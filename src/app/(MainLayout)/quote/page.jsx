"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Select, DatePicker, TimePicker, Slider } from "antd";
import { TbCurrentLocation } from "react-icons/tb";

export default function RequestQuoteForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { control, register, handleSubmit } = useForm({
    // no defaultValues needed here
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  if (!isClient) {
    return null; // Prevent server render mismatch by rendering nothing initially
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md space-y-6 my-5"
    > 
        <div className="border-[#1D69E1] border-b-2">

      <h2 className="text-2xl font-bold text-blue-700 mb-2">Request A Quote</h2>
      <p className="text-gray-600 mb-6">Provide information about your needs!</p>
        </div>

      <div className="relative">
        <label className="font-semibold mb-1 block">Project Location</label>
        <input
          {...register("projectLocation")}
          className="w-full border border-gray-300 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter project location"
        />
        <TbCurrentLocation className="absolute right-3 top-[51px] transform -translate-y-1/2 text-black pointer-events-none" size={20} />
      </div>

      <div>
        <label className="font-semibold mb-1 block">Service Needed</label>
        <Controller
          name="services"
          control={control}
          render={({ field }) => (
            <Select
              mode="multiple"
              allowClear
              placeholder="Select services"
              className="w-full"
              {...field}
              onChange={(val) => field.onChange(val)}
              options={[
                { label: "Handyman", value: "Handyman" },
                { label: "Electrician", value: "Electrician" },
                { label: "Plumber", value: "Plumber" },
                { label: "Painter", value: "Painter" },
                { label: "Carpenter", value: "Carpenter" },
              ]}
            />
          )}
        />
      </div>

      <div>
        <label className="font-semibold mb-1 block">Project Description</label>
        <textarea
          {...register("projectDescription")}
          rows={4}
          placeholder="Tell us more about your projects"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-6">
        <div className="flex-1">
          <label className="font-semibold mb-1 block flex items-center space-x-2">
            <span>Date</span>
            <span className="underline cursor-pointer text-blue-600 text-sm font-normal">Choose a date</span>
          </label>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <DatePicker
                className="w-full"
                onChange={(date) => field.onChange(date)}
                value={field.value}
                format="YYYY-MM-DD"
              />
            )}
          />
        </div>

        <div className="flex-1 mt-4 sm:mt-0">
          <label className="font-semibold mb-1 block flex items-center space-x-2">
            <span>Time</span>
            <span className="underline cursor-pointer text-blue-600 text-sm font-normal">Pick a time</span>
          </label>
          <Controller
            control={control}
            name="time"
            render={({ field }) => (
              <TimePicker
                className="w-full"
                format="HH:mm"
                onChange={(time) => field.onChange(time)}
                value={field.value}
                use12Hours={false}
              />
            )}
          />
        </div>
      </div>

      <div>
        <label className="font-semibold mb-2 block">Offer a Price</label>
        <Controller
          control={control}
          name="priceRange"
          render={({ field }) => (
            <>
              <Slider
                range
                min={10}
                max={1000}
                value={field.value || [10, 1000]}
                onChange={field.onChange}
                tooltipVisible
              />
              <div className="flex justify-between text-xs mt-1 px-1 text-gray-500">
                <div>
                  <label className="block">Minimum</label>
                  <input
                    type="number"
                    min={10}
                    max={field.value ? field.value[1] : 1000}
                    className="w-16 border border-gray-300 rounded p-1"
                    value={field.value ? field.value[0] : 10}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (field.value && val <= field.value[1]) {
                        field.onChange([val, field.value[1]]);
                      }
                    }}
                  />
                </div>
                <div>
                  <label className="block">Maximum</label>
                  <input
                    type="number"
                    min={field.value ? field.value[0] : 10}
                    max={1000}
                    className="w-20 border border-gray-300 rounded p-1"
                    value={field.value ? field.value[1] : 1000}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (field.value && val >= field.value[0]) {
                        field.onChange([field.value[0], val]);
                      }
                    }}
                  />
                </div>
              </div>
            </>
          )}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#1D69E1] text-white font-semibold py-3 rounded hover:bg-blue-800 transition"
      >
        Request Quote
      </button>
    </form>
  );
}
