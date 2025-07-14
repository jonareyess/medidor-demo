import CurrentChart from "@/components/CurrentChart"

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <CurrentChart />
      <CurrentChart />
      <CurrentChart />
    </div>
  )
}
