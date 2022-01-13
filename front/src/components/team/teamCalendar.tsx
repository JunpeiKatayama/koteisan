import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

const TeamCalendar: React.FC = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        locale="ja"
        initialEvents={[{ title: "initial event", start: new Date() }]}
        weekends={true}
        slotDuration="01:00:00"
        titleFormat={{
          year: "numeric",
          month: "short",
        }}
        headerToolbar={{
          start: "title",
          end: "dayGridMonth",
        }}
        footerToolbar={{
          end: "prev, next, today",
        }}
        dayCellContent={function (e) {
          e.dayNumberText = e.dayNumberText.replace("日", "");
        }}
        expandRows={true}
        contentHeight={"auto"}
      />
    </div>
  );
};

export default TeamCalendar;
