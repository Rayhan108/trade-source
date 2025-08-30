import ServiceNav from '@/Component/Booking/ServiceNav';

const BookingLayout = ({ children }) => {
  return (
    <>
      <div>
        <div className="">
          <div>
            <ServiceNav />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default BookingLayout;
