import React, { useEffect, useState } from "react";
import { FaHourglassHalf } from "react-icons/fa";
import styled from "styled-components";
import { MonthView } from "./MonthView";
import { TitleCalendarRow } from "./TitleCalendarRow";
import { WeekView } from "./WeekView";
import moment from "moment";
import { format } from "./Utils/formatter";
import { log } from "../../consoleHelper";

export const Container = styled.div`
  display: "flex";
  background: clear;
  font-family: "Raleway";
  justify-content: "center";
`;

export const MONTH = 0;
export const DAY = 1;

export const Timesheet = () => {
  const [state, setState] = useState(MONTH);
  const [date, setDate] = useState(moment().toDate());

  useEffect(() => {
    console.log("CURREENT DAY CHANGED");
    log(date);
  }, [date]);

  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <FaHourglassHalf color="gray" />
      </div>
      <div
        style={{
          width: "800px",
          margin: "0 auto",
        }}
      >
        <TitleCalendarRow
          state={state}
          setState={setState}
          title={state === MONTH ? "" : format(moment(date))}
        />
        {state === DAY ? <WeekView date={date} setDate={setDate} /> : null}
        {state === MONTH ? <MonthView /> : null}
      </div>
    </Container>
  );
};
