import React,{useState} from "react";
import "../stylesheets/calender.css";
import * as dateFns from "date-fns";

var Calender = (props) => {

    var [currentMonth, setCurrentMonth] =  useState(new Date());
    var [selectedDate, setSelectedDate] =  useState(new Date(1200,2,2));
    
    var renderHeader = () => {
        const dateFormat = "MMMM yyyy";

        return (
            <div className="header">
                <div className="start">
                    <span>
                    {dateFns.format(currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="center">
                    <div className="icon" onClick={prevMonth}>chevron_left</div>
                </div>
                <div className="end" onClick={nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );
    }

    var renderDays = () => {
        const dateFormat = "EEEEE";
        const days = [];
        let startDate = dateFns.startOfWeek(currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
            <div className="col col-center" key={i}>
                {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    var renderCells = () => {
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell`}
                        key={day}
                        onClick={() => onDateClick(cloneDay)}
                    >
                        <span className={`number ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                        }`}>{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    var onDateClick = (day) => {
        setSelectedDate(day);
        props.dtTextCallback(dateFns.format(selectedDate, "eee, MMM dd"));
    };

    var nextMonth = () => {
        setCurrentMonth(dateFns.addMonths(currentMonth, 1));
    };
    var prevMonth = () => {
        setCurrentMonth(dateFns.subMonths(currentMonth, 1));
    };

    return (
        <div style={container}>
            <div className="calendar">
                {renderHeader()}
                {renderDays()}
                {renderCells()}
            </div>
        </div>
    );
}

var container = {
    width : "100%"
}

export default Calender;