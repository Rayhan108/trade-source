import Image from 'next/image';

export default function ConstractorCard({ data }) {
  return (
    <div className="max-w-sm w-full bg-green-200 rounded-lg shadow-md overflow-hidden mx-auto">
      <div className="relative h-64">
        <Image
          src={data.imageSrc}
          alt={data.name}
          layout="fill"
          objectFit="cover"
          className="block"
          priority
        />
        <h2 className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-lg">
          {data.name}
        </h2>
        <button
          className="absolute bottom-4 right-4 bg-blue-600 text-white text-sm font-semibold py-1.5 px-3 rounded-md shadow-md hover:bg-blue-700 transition"
          type="button"
        >
          View Profile
        </button>
      </div>

      <div className="p-5 text-gray-900 flex flex-col gap-4">
        <p className="font-semibold text-base">{data.status}</p>

        <div className="flex gap-6 text-sm items-center">
          <span className="flex items-center gap-1">
            <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
            {data.completedTasks} Completed Task{data.completedTasks > 1 ? 's' : ''}
          </span>
          <span className="flex items-center gap-1">
            <span className="bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
            {data.rating} ({data.reviews} review{data.reviews > 1 ? 's' : ''})
          </span>
        </div>

        <div>
          <p className="font-semibold mb-2">Expertise</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {data.expertise.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className="w-full bg-blue-600 text-white font-semibold py-3 hover:bg-blue-700 transition"
        type="button"
      >
        Request Quote
      </button>
    </div>
  );
}
