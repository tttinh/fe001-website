import monitorImg from '../assets/monitor-card.webp';

const MonitorSection = () => {
  return (
    <section className="container-center flex-between flex-col gap-12 py-16 md:flex-row md:gap-24 md:py-24">
      <div className="flex w-full flex-col gap-6 md:w-1/2">
        <p className="font-semibold text-emerald-500 uppercase">Monitor</p>
        <h2 className="text-3xl font-bold md:text-4xl">
          Introducing best mobile carousels
        </h2>
        <p className="text-gray-600">
          Before the ship is really back. Round, round, all around the world.
          Round, all around the world. Round, all around the world. Round, all
          around the world.
        </p>
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-4"
        >
          Learn more about monitoring{' '}
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
      <div className="w-full md:w-1/2">
        <img className="h-auto w-full" src={monitorImg} alt="monitor image" />
      </div>
    </section>
  );
};

export default MonitorSection;
