import Footer from "../global/Footer";
import EventItem from "../home/EventItem";
import { events } from "../global/Data";
import FixNavbar from "../global/FixNavbar";


const Event = () => {
  return (
    <>
      <FixNavbar />
      <div id="event-detail" className="bg-2-2 bg-no-repeat bg-cover">
        <div className="flex relative flex-col mx-auto lg:max-w-[1024px] xl:max-w-[1440px] lg:px-14  xl:px-8">
          <h1 className="text-custom-white font-jakarta-sans lg:text-[48px] xl:text-[76px] font-bold pt-16 pb-4">
            upcoming <span className="font-normal font-caslon-text italic">event</span>
          </h1>
          <div className="grid gap-x-8 gap-y-24 grid-cols-3 px-8 mb-64">
            {events.map((event) => (
              <EventItem
                key={event.id}
                id={event.id}
                img={event.img}
                name={event.title}
                desc={event.desc}
                date={event.date}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Event