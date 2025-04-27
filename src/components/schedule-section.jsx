import scheduleImg from '../assets/stats.webp';
const ScheduleSection = () => {
  return (
    <section className="container-center flex-between flex-col gap-12 py-16 md:flex-row md:gap-24">
      <div className="w-full md:w-1/2">
        <img className="h-auto w-full" src={scheduleImg} alt="stats image" />
      </div>
      <div className="flex w-full flex-col gap-6 md:w-1/2">
        <p className="font-semibold text-orange-500 uppercase">Schedule</p>
        <h2 className="text-3xl font-bold md:text-4xl">
          Streamline Your Business <br /> With Smart Scheduling Solutions
        </h2>
        <p className="text-gray-600">
          Take control of your time and boost productivity with our intelligent
          scheduling system. Automate appointments, manage team availability,
          and deliver exceptional customer experiences through seamless calendar
          management.
        </p>
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-4"
        >
          Explore scheduling features{' '}
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ScheduleSection;
