import Image from 'next/image';

export default function ProjectCard({ project }) {
  // console.log('Project prop:', project);

  return (
    <div className="max-w-xs bg-white rounded-lg text-black mb-12 shadow-md overflow-hidden cursor-pointer">
      <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-black mb-2">
          {project?.title}
        </h3>
        <div className="flex items-center space-x-1 text-sm text-blue-600">
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 7.91l6.564-.955L10 1l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
          </svg>
          <span>{project?.rating || 5}</span>
          <span className="text-gray-400">({project?.reviews || 100})</span>
          <span className="mx-1 text-gray-300">|</span>
          <span className="text-gray-700">from ${project?.price}</span>
        </div>
      </div>
    </div>
  );
}
