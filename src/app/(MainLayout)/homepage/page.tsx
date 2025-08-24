import React from 'react';
import WelBan from '../../../Component/Homepage/WelBan';
import ExpertConstructor from '../../../Component/Homepage/ExpertConstructor';
import MembershipBanner from '../../../Component/Homepage/MembershipBanner';
import Service from '../../../Component/Home/Service';
import RecentArticle from '../../../Component/Home/RecentArticle';
const HomePage = () => {
  return (
    <div>
      <WelBan />
      <div className="my-8 container mx-auto">
        <Service />
      </div>
      <ExpertConstructor />
      <MembershipBanner />
      <RecentArticle />
    </div>
  );
};

export default HomePage;
