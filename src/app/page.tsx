// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Card */}
      <section className="bg-white rounded-2xl shadow-lg p-6 w-[420px] grid grid-rows-6 gap-4">
        
        {/* Header */}
        <header className="row-span-1">
          <h1 className="text-xl font-semibold text-gray-800">Appearance</h1>
          <p className="text-sm text-gray-500">
            Set or customize your preferences for the system
          </p>
        </header>

        {/* Language */}
        <section className="row-span-1">
          <label className="text-sm font-medium text-gray-700">Language</label>
          <select className="mt-1 w-full border rounded-md px-2 py-1 text-sm">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </section>

        {/* Theme */}
        <section className="row-span-1">
          <h2 className="text-sm font-medium text-gray-700 mb-2">Interface theme</h2>
          <div className="flex flex-row gap-3">
            <article className="flex flex-col items-center justify-center basis-1/3 border rounded-md p-2">
              <Image src="/Auto.png" alt="Auto" width={80} height={50} className="rounded-md" />
              <span className="text-xs mt-1">Auto</span>
            </article>
            <article className="flex flex-col items-center justify-center basis-1/3 border-2 border-purple-500 rounded-md p-2">
              <Image src="/Light.png" alt="Light" width={80} height={50} className="rounded-md" />
              <span className="text-xs mt-1">Light</span>
            </article>
            <article className="flex flex-col items-center justify-center basis-1/3 border rounded-md p-2">
              <Image src="/Dark.png" alt="Dark" width={80} height={50} className="rounded-md" />
              <span className="text-xs mt-1">Dark</span>
            </article>
          </div>
        </section>

        {/* Accent color */}
        <section className="row-span-1">
          <h2 className="text-sm font-medium text-gray-700 mb-2">Accent color</h2>
          <div className="flex flex-row gap-2">
            <button className="w-6 h-6 rounded-full bg-red-400"></button>
            <button className="w-6 h-6 rounded-full bg-yellow-400"></button>
            <button className="w-6 h-6 rounded-full bg-green-400"></button>
            <button className="w-6 h-6 rounded-full bg-blue-400"></button>
            <button className="w-6 h-6 rounded-full bg-purple-400"></button>
          </div>
        </section>

        {/* Toggles */}
        <section className="row-span-2 grid grid-rows-3 gap-3">
          <label className="flex flex-row justify-between items-center text-sm">
            <span className="flex flex-row items-center gap-2">☀️ Reduce motion</span>
            <input type="checkbox" defaultChecked className="accent-purple-500 w-4 h-4" />
          </label>

          <label className="flex flex-row justify-between items-center text-sm">
            <span className="flex flex-row items-center gap-2">▶ Auto play</span>
            <input type="checkbox" defaultChecked className="accent-purple-500 w-4 h-4" />
          </label>

          <label className="flex flex-row justify-between items-center text-sm">
            <span className="flex flex-row items-center gap-2">🖼 High quality photo</span>
            <input type="checkbox" className="accent-purple-500 w-4 h-4" />
          </label>
        </section>

        {/* Footer */}
        <footer className="row-span-1 flex flex-row justify-between items-center">
          <button className="px-3 py-1 rounded-md text-gray-600 border">Cancel</button>
          <button className="px-3 py-1 rounded-md text-white bg-purple-600">
            Save Preferences
          </button>
        </footer>
      </section>
    </main>
  );
}
