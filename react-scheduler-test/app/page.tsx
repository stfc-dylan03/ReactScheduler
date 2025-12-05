import Image from "next/image";
import fs from "fs/promises";
import path from "path";
//import experiment from "../data/exampleExperiment.json";  

import data from "../data/experiments.json";
import { ExperimentsFile } from "../types/Experiment";
import Link from "next/dist/client/link";

export default function Home() {


  const experiments = (data as ExperimentsFile).experiments;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        {/* Nav buttons */}
        <div style ={{ margin: "1rem0", display: "flex", gap: "1rem" }}>
          <Link href="/scheduler"><button>Scheduler</button></Link>
          <Link href="/reports"><button>Reports</button></Link>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50">
            Welcome to the dev version of the ISIS and CLF Scheduler
          </h1>
          <p className="max-w-md text-lg leading-6 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>

          <h1 className="max-w-xs text-xl font-bold leading-8 tracking-tight text-black dark:text-zinc-50">Experiments:</h1>
          {experiments.map((exp) => (
            <div key={exp.RBNumber}>
              <h2><strong>{exp.experimentTitle}</strong></h2>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"><strong>Investigator:</strong> {exp.investigator}</p>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"><strong>Notes:</strong> {exp.notes}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
