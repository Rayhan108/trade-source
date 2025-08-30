import ContractorProNav from '@/Component/ContractorPro/ContractorProNav';

const ContractorProLayout = ({ children }) => {
  return (
    <>
      <div>
        <div className="">
          <div>
            <ContractorProNav />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default ContractorProLayout;
