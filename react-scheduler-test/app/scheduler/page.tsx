import Link from "next/link"

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 

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

export default function SchedulerPage() {
    const today = new Date();
    const monthLabel = today.toLocaleString("default", {
        month: "long",
        year: "numeric",
    });
    
    const days = buildMonthCalendar(today);

    return (
        <main style={{ padding: "2rem"}}>
            <header
            style={{
                display: "flex",
                justifyContent: "space-between",    
                marginBottom: "1rem",
                alignItems: "center",
            }}>
                <Link href = "/"><button>Home</button></Link>
                <h1 style={{ margin: 0 }}>{monthLabel}</h1>
                <div/>
            </header>
            <section style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "0.5rem",  
            }}>
                {/* Weekday Headers */}
                {weekdays.map((day) => (
                    <div
                    key={day}
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        padding: "0.5rem 0",
                        borderBottom: "2px solid black",
                    }}>
                        {day}
                    </div>
                ))} 

                {/* Day Cells */}
                {days.map((date, index) => {
                    if (!date) {
                        return <div key = {`empty-${index}`} />;
                    }

                    const isToday =
                        date.getDate() === today.getDate() &&
                        date.getMonth() === today.getMonth() &&
                        date.getFullYear() === today.getFullYear();

                    return (
                        <div
                        key={date.toISOString()}
                        style={{    
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            padding: "0.5rem",
                            minHeight: "80px",
                            fontSize: "0.9rem", 
                            backgroundColor: isToday ? "#add8e6" : "transparent",
                        }}>
                            <div style={{fontWeight: "bold" }}>
                                {date.getDate()}
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}