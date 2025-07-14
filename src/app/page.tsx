import CurrentChart from "@/components/CurrentChart"
import PhaseButtons from "@/components/PhaseButtons"

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <CurrentChart />
      <CurrentChart />
      <CurrentChart />
    </div>
  )
}
