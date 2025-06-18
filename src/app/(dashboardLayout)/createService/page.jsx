"use client"



import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { FiPlus, FiX } from "react-icons/fi"



export default function CreateServiceForm() {
  const [selectedServices, setSelectedServices] = useState(["Handyman", "Painter"])
  const [searchTerm, setSearchTerm] = useState("")

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      title: "",
      details: "",
      category: "",
      price: "",
      serviceTypes: selectedServices,
    },
  })

  const removeService = (serviceToRemove) => {
    const updatedServices = selectedServices.filter((service) => service !== serviceToRemove)
    setSelectedServices(updatedServices)
    setValue("serviceTypes", updatedServices)
  }

  const addService = (service) => {
    if (service && !selectedServices.includes(service)) {
      const updatedServices = [...selectedServices, service]
      setSelectedServices(updatedServices)
      setValue("serviceTypes", updatedServices)
      setSearchTerm("")
    }
  }

  const onSubmit = (data) => {
    const formData = {
      ...data,
      serviceTypes: selectedServices,
    }
    console.log("Form Data:", formData)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      e.preventDefault()
      addService(searchTerm.trim())
    }
  }

  return (
    <div className="max-w-7xl mx-auto 2">
      <div className="bg-white rounded-lg p-6 sm:p-8">
        {/* Form Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Create Your Service</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">Upload cover of your service</label>
            <Controller
              name="coverImage"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-gray-400 transition-colors cursor-pointer">
                  <input
                    {...field}
                    type="file"
                    accept="image/*"
                    onChange={(e) => onChange(e.target.files)}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <FiPlus className="w-8 h-8 text-gray-400 mb-3" />
                      <span className="text-lg font-medium text-gray-600">Upload</span>
                    </div>
                  </label>
                </div>
              )}
            />
          </div>

          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-900 mb-3">
              Title of your service
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              id="title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder=""
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
          </div>

          {/* Service Details */}
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-900 mb-3">
              Service Details
            </label>
            <textarea
              {...register("details", { required: "Service details are required" })}
              id="details"
              rows={2}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder=""
            />
            {errors.details && <p className="mt-1 text-sm text-red-600">{errors.details.message}</p>}
          </div>

          {/* Item Category Name */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-3">
              Item Category Name
            </label>
            <input
              {...register("category", { required: "Category is required" })}
              type="text"
              id="category"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder=""
            />
            {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">Service type</label>

            {/* Selected Services Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedServices.map((service) => (
                <div
                  key={service}
                  className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  <span>{service}</span>
                  <button
                    type="button"
                    onClick={() => removeService(service)}
                    className="hover:bg-gray-600 rounded-full p-0.5 transition-colors"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Search Input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Search for more services..."
            />
          </div>

          {/* Item Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-900 mb-3">
              Item Price
            </label>
            <input
              {...register("price", { required: "Price is required" })}
              type="text"
              id="price"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Price starts from"
            />
            {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
          >
            Create Service
          </button>
        </form>
      </div>
    </div>
  )
}
