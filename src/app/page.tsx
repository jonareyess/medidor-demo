import CurrentChart from "@/components/CurrentChart"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-300">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Demo de Monitoreo de Corriente</h1>
      <div className="w-full max-w-4xl h-96">
        <CurrentChart />
      </div>
    </main>
  )
}
