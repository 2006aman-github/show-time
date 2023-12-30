import DateCard from "../Components/DateCard";
import LangCard from "../Components/LangCard";
import ShowTimes from "../Components/ShowTimes";
import "./Shows.css";

function Shows() {
  return (
    <div id="shows-page">
      <h2>Showlistings</h2>
      <section id="shows-header">
        <div id="dates">
          <DateCard />
          <DateCard />
          <DateCard />
          <DateCard />
        </div>
        <div id="filter">
          <LangCard />
          <LangCard />
          <LangCard />
          <LangCard />
          <LangCard />
        </div>
      </section>
      <div id="shows">
        <ShowTimes />
        <ShowTimes />
        <ShowTimes />
        <ShowTimes />
      </div>
    </div>
  );
}

export default Shows;
