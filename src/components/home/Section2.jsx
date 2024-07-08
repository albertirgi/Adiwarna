import Section2Pic from "../../assets/images/logo-kelana-only.svg";

const Section2 = () => {
  return (
    <div>
      <div className="bg-2-1 h-screen relative w-full bg-no-repeat bg-contain bg-center snap-start">
        <div className="flex flex-row justify-end pt-40">
          <div className="basis-7/12 flex justify-end">
            <h1 className="text-custom-white font-jakarta-sans text-6xl font-bold pr-20">timeline</h1>
          </div>
          <div className="basis-5/12 flex justify-start">
            <div className="flex flex-row">
              <div className="basis-1/4 flex">
                <div className="flex flex-col items-center justify-center pt-10">
                  <img src={Section2Pic} />
                  <div className="w-1 h-full bg-custom-white mt-2"></div>
                </div>
              </div>
              <div className="basis-4/4 flex">
                <div className="flex flex-col pt-3">
                  <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">pre-kelana</h1>
                  <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">roadshow</h1>
                  <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">kelana ke kafe</h1>
                  <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">workshop</h1>
                  <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">talkshow</h1>
                  <h1 className="text-custom-white font-jakarta-sans text-3xl">exhibition</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-2-2 h-screen relative w-full bg-no-repeat bg-contain bg-center snap-start">
        <div className="flex flex-col justify-end pt-8">
          <div className="w-full h-16 bg-[#FA0202] border-y-4 border-y-white marquee-container">
            <div className="flex flex-row items-center h-full justify-evenly marquee-content">
              <h1 className="text-custom-white font-jakarta-sans text-2xl font-bold">
                upcoming <span className="text-custom-white font-jakarta-sans text-2xl font-normal italic">event</span>
              </h1>
              <img src="{{ asset('assets/images/logo-kelana-only.svg') }}" />
              <h1 className="text-custom-white font-caslon-text text-2xl font-normal italic">
                upcoming <span className="text-custom-white font-jakarta-sans text-2xl font-normal">event</span>
              </h1>
              <img src="{{ asset('assets/images/logo-kelana-only.svg') }}" />

              <h1 className="text-custom-white font-jakarta-sans text-2xl font-bold">
                upcoming <span className="text-custom-white font-caslon-text text-2xl font-normal italic">event</span>
              </h1>
              <img src="{{ asset('assets/images/logo-kelana-only.svg') }}" />
              <h1 className="text-custom-white font-jakarta-sans text-2xl font-bold">
                upcoming <span className="text-custom-white font-jakarta-sans text-2xl font-normal italic">event</span>
              </h1>
              <img src="{{ asset('assets/images/logo-kelana-only.svg') }}" />
              <h1 className="text-custom-white font-caslon-text text-2xl font-normal italic">
                upcoming <span className="text-custom-white font-jakarta-sans text-2xl font-normal">event</span>
              </h1>
              <img src="{{ asset('assets/images/logo-kelana-only.svg') }}" />

              <h1 className="text-custom-white font-jakarta-sans text-2xl font-bold">
                upcoming <span className="text-custom-white font-caslon-text text-2xl font-normal italic">event</span>
              </h1>
              <img src="{{ asset('assets/images/logo-kelana-only.svg') }}" />
            </div>
          </div>

          <div className="flex flex-col px-64 pt-12">
            <h1 className="text-custom-white font-jakarta-sans text-6xl font-bold">
              upcoming <span className="text-custom-white font-caslon-text text-6xl font-normal italic">event</span>
            </h1>
            <div className="flex flex-row pt-12 justify-between">
              <div className="w-[23rem]">
                <div className="flex flex-col">
                  <div className="size-[23rem] bg-custom-gray"></div>
                  <h1 className="text-custom-white font-jakarta-sans text-4xl font-bold mt-8">nama event</h1>
                  <p className="text-custom-white font-jakarta-sans text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius</p>
                </div>
              </div>
              <div className="w-[23rem]">
                <div className="flex flex-col">
                  <div className="size-[23rem] bg-custom-gray"></div>
                  <h1 className="text-custom-white font-jakarta-sans text-4xl font-bold mt-8">nama event</h1>
                  <p className="text-custom-white font-jakarta-sans text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius</p>
                </div>
              </div>
              <div className="w-[23rem]">
                <div className="flex flex-col">
                  <div className="size-[23rem] bg-custom-gray"></div>
                  <h1 className="text-custom-white font-jakarta-sans text-4xl font-bold mt-8">nama event</h1>
                  <p className="text-custom-white font-jakarta-sans text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
