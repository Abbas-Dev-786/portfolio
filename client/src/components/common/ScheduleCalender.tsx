import { InlineWidget } from "react-calendly";

const ScheduleCalender = () => {
  return (
    <div className="md:w-full p-0">
      <InlineWidget
        url="https://calendly.com/abbasbhp787"
        styles={{
          height: "650px",
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
      />
    </div>
  );
};

export default ScheduleCalender;
