import Image from 'next/image';

export default function  ProjectCard({ project }) {
  // console.log('Project prop:--------->', project);
  const reviews = Array.isArray(project?.review) ? project.review : [];
// console.log("reviews---->",reviews);
  // helper to render the star icon
  const StarIcon = () => (
    <svg
      className="w-4 h-4 fill-current text-yellow-500 inline-block mr-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.49 7.91l6.564-.955L10 1l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
    </svg>
  );

  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length
        ).toFixed(1)
      : 0;
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
         {/* Rating summary */}
        <div className="flex items-center space-x-1 text-sm text-blue-600 mb-2">
          <StarIcon />
          <span>{avgRating}</span>
          <span className="text-gray-400">({reviews.length})</span>
          <span className="mx-1 text-gray-300">|</span>
          <span className="text-gray-700">Price : ${project?.price}</span>
        </div>

      </div>
    </div>
  );
}
