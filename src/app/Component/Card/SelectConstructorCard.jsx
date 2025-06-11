import Image from "next/image";
import { FiCheck, FiStar } from "react-icons/fi"
const SelectConstructorCard = ({contractor}) => {
    return (
       <div  className="bg-white rounded-lg overflow-hidden shadow-sm">
                     {/* Profile Image Section */}
                     <div className="relative h-48">
                       <Image
                         src={contractor.image}
                         alt={contractor.name}
                         className="w-full h-full object-cover"
                       />
                       <div className="absolute bottom-4 left-4">
                         <h3 className="text-white text-xl font-bold drop-shadow-lg">{contractor.name}</h3>
                       </div>
                       <button className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700">
                         View Profile
                       </button>
                     </div>
   
                     {/* Info Section */}
                     <div className="bg-green-200 p-4">
                       <div className="flex items-center justify-between mb-3">
                         <div className="space-y-1">
                           <div className="flex items-center gap-2">
                             <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                               <FiCheck className="w-3 h-3 text-white" />
                             </div>
                             <span className="text-sm font-medium text-gray-700">Verified Contractor</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                               <FiCheck className="w-3 h-3 text-white" />
                             </div>
                             <span className="text-sm text-gray-600">{contractor.completedTasks} Completed Task</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <FiStar className="w-4 h-4 text-yellow-500 fill-current" />
                             <span className="text-sm font-medium text-gray-700">
                               {contractor.rating} ({contractor.reviews} reviews)
                             </span>
                           </div>
                         </div>
                         <div className="text-right">
                           <div className="text-2xl font-bold text-gray-900">${contractor.hourlyRate}/Hr</div>
                         </div>
                       </div>
   
                       <div className="mb-4">
                         <h4 className="font-semibold text-gray-900 mb-1">Expertise</h4>
                         <p className="text-sm text-gray-600">{contractor.expertise}</p>
                       </div>
   
                       <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                         Select & Continue
                       </button>
                     </div>
                   </div>
    );
};

export default SelectConstructorCard;