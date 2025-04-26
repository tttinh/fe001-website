const PurposeSection = () => {
  return (
    <section className="bg-gray-50 px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-purple-600 uppercase">Achieve more</p>
          <h2 className="text-3xl font-bold md:w-4/5 md:text-4xl">
            Purpose of a convoy is to keep your team
          </h2>
        </div>

        <div className="flex gap-4">
          <div className="pt-4">🟣</div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Built for impact</h3>
            <p className="text-gray-600">
              We identify and nurture a truly diverse team of designers,
              developers and marketers
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="pt-4">🔴</div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">In sync with you</h3>
            <p className="text-gray-600">
              We work the way you do by adapting to your workflows and rhythm we
              aim to blend in for a seamless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
