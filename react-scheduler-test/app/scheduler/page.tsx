"use client";

import Link from "next/link"
import { useMemo, useState } from "react";
import data from "../../data/experiments.json";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 

type Experiment = {
    RBNumber: string;
    experimentTitle: string;    
    investigator: string;
    instrument: string;
    notes: string;
    startDate: string;
    endDate: string;
};

type ExperimentsFile = {
    experiments: Experiment[];
};

function buildMonthCalendar(date: Date): (Date | null)[] {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    let startDay = firstDayOfMonth.getDay();
    const monBasedStartDay = (startDay + 6) % 7;

    const cells: (Date | null)[] = [];

    for (let i = 0; i < monBasedStartDay; i++) {
        cells.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        cells.push(new Date(year, month, day));
    }

    return cells;
}

function parseDate(dateStr: string): Date {
    return new Date(dateStr + "T00:00:00");
}

function isWithinRange(date: Date, startStr: string, endStr: string): boolean {
    const start = parseDate(startStr);
    const end = parseDate(endStr);
    return date >= start && date <= end;
}

export default function SchedulerPage() {
    const { experiments } = data as ExperimentsFile;

    const today = new Date();

    const [currentMonth, setCurrentMonth] = useState(
        () => new Date(today.getFullYear(), today.getMonth(), 1)
    );

    const {monthLabel, days} = useMemo(() => {
        const label = currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
        });

        const grid = buildMonthCalendar(currentMonth);

        return { monthLabel: label, days: grid };
    }, [currentMonth]);    
    
    const goPrev = () => {
        setCurrentMonth((prev) => 
            new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
        );
    };

    const goNext = () => {
        setCurrentMonth((prev) => 
            new Date (prev.getFullYear(), prev.getMonth() + 1, 1)
        );
    };

    return (
        <main style={{ padding: "2rem"}}>
            <header
            style={{
                display: "flex",
                justifyContent: "space-between",    
                marginBottom: "1rem",
                alignItems: "center",
                gap: "1rem",
            }}>
                <Link href = "/"><button>{'<'} Home</button></Link>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <button onClick={goPrev}>{'<'}</button>
                    <h1 style={{ margin: 0 }}>{monthLabel}</h1>
                    <button onClick={goNext}>{'>'}</button>
                </div>

                <div style={{ width: "80px" }}/>
            </header>

            <section style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 0,
                border:" 1px solid #ccc",
            }}>
                {/* Weekday Headers */}
                {weekdays.map((day) => (
                    <div
                    key={day}
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        padding: "0.25rem 0",
                        borderBottom: "1px solid #ddd",
                    }}>
                        {day}
                    </div>
                ))} 

                {/* Day Cells */}
                {days.map((date, index) => {
                    if (!date) {
                        return <div key = {`empty-${index}`} style={{
                            borderRight: "1px solid #ddd",
                            borderBottom: "1px solid #ddd", 
                        }} />;
                    }

                    const isToday =
                        date.getDate() === today.getDate() &&
                        date.getMonth() === today.getMonth() &&
                        date.getFullYear() === today.getFullYear();

                    const expToday = experiments.filter((exp) =>
                        isWithinRange(date, exp.startDate, exp.endDate)
                    );

                    return (
                        <div
                        key={date.toISOString()}
                        style={{    
                            borderRight: "1px solid #ddd",
                            borderBottom: "1px solid #ddd",
                            borderRadius: "4px",
                            padding: "0.25rem",
                            minHeight: "70px",
                            fontSize: "0.8rem", 
                            backgroundColor: isToday ? "#00bfff98" : "transparent",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.2rem",
                        }}>
                            <div style={{fontWeight: "bold" }}>
                                {date.getDate()}
                            </div>

                            {/* Experiments for the day */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                                {expToday.map((exp) => (
                                    <div
                                    key={exp.RBNumber}
                                    style={{
                                        borderRadius: "0px",
                                        border: "1px solid #aaa",
                                        padding: "0.1rem 0.2rem",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                    title={`${exp.RBNumber} ${exp.experimentTitle} (Investigator: ${exp.investigator})`}
                                    >
                                        {exp.RBNumber} {exp.investigator}
                                    </div>
                                ))}
                            </div>  
                        </div>
                    );
                })}
            </section>
        </main>
    );
}