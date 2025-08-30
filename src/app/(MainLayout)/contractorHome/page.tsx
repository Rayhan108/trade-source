import ConBaner from "@/Component/ContractorHome/ConBaner";
import WorkProcess from "@/Component/ContractorHome/WorkProcess";
import Stats from "@/Component/ContractorHome/Stats";
import RealRequests from "@/Component/ContractorHome/RealRequests";
import RecentArticle from "@/Component/Home/RecentArticle";

const ContratorHomePage = () => {
  return (
    <div>
      <ConBaner />
      <WorkProcess />
      <Stats />
      <RealRequests />
      <RecentArticle />
    </div>
  );
};

export default ContratorHomePage;
