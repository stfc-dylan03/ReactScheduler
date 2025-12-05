import Link from "next/link"

export default function LostTimeReportsPage() {
    return (
        <main style={{ padding: "2rem"}}>
            <Link href = "/"><button>Home</button></Link>
            <h1 className="max-w-xs text-3xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50">Lost Time Reports</h1>
            <p>This is where the lost time reports will go</p>
        </main>
    );
}