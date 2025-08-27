import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <section className="w-[420px] bg-white rounded-2xl shadow-xl p-5 grid gap-4">
        {/* Header */}
        <header>
          <h1 className="text-lg font-semibold text-gray-900">Appearance</h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Set or customize your preferences for the system
          </p>
        </header>

        {/* Language */}
        <section>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Language</h2>
              <p className="text-xs text-gray-500">Select the language of the platform</p>
            </div>
            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Interface theme */}
        <section>
          <h2 className="text-sm font-semibold text-gray-700">Interface theme</h2>
          <p className="text-xs text-gray-500 -mt-0.5">
            Customize your application appearance
          </p>

          <div className="flex gap-2 mt-2">
            {/* Auto */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-full rounded-lg overflow-hidden">
                <Image
                  src="/Auto.png"
                  alt="Auto"
                  width={400}
                  height={240}
                  className="w-full h-[72px] object-cover"
                />
              </div>
              <span className="mt-1 text-xs text-gray-600">Auto</span>
            </div>

            {/* Light (selected) */}
            <div className="flex flex-col items-center flex-1 relative">
              <div className="w-full border-2 border-purple-500 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/Light.png"
                  alt="Light"
                  width={400}
                  height={240}
                  className="w-full h-[72px] object-cover"
                />
              </div>
              <div className="absolute left-2 bottom-6 w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center text-white text-[10px] shadow">
                ✓
              </div>
              <span className="mt-1 text-xs text-gray-600">Light</span>
            </div>

            {/* Dark */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-full rounded-lg overflow-hidden">
                <Image
                  src="/Dark.png"
                  alt="Dark"
                  width={400}
                  height={240}
                  className="w-full h-[72px] object-cover"
                />
              </div>
              <span className="mt-1 text-xs text-gray-600">Dark</span>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Accent color */}
        <section className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-gray-700">Accent color</h2>
            <p className="text-xs text-gray-500">Pick your platform´s main color</p>
          </div>
          <div className="flex gap-2">
            <button className="w-4 h-4 rounded-full bg-red-400" />
            <button className="w-4 h-4 rounded-full bg-yellow-400" />
            <button className="w-4 h-4 rounded-full bg-green-400" />
            <button className="w-4 h-4 rounded-full bg-blue-500" />
            <button className="w-4 h-4 rounded-full bg-purple-500" />
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Toggles */}
        <section className="grid">
          <label className="flex justify-between items-center text-sm py-2 border-b border-gray-100">
            <span className="flex items-center gap-2">☀️ Reduce motion</span>
            <span className="relative">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-purple-600 transition" />
              <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:left-5 transition" />
            </span>
          </label>

          <label className="flex justify-between items-center text-sm py-2 border-b border-gray-100">
            <span className="flex items-center gap-2">▶️ Auto play</span>
            <span className="relative">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-purple-600 transition" />
              <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:left-5 transition" />
            </span>
          </label>

          <label className="flex justify-between items-center text-sm py-2">
            <span className="flex items-center gap-2">🖼️ High quality photo</span>
            <span className="relative">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-purple-600 transition" />
              <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:left-5 transition" />
            </span>
          </label>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Footer */}
        <footer className="flex flex-row items-center justify-between pt-1">
          <span className="text-xs text-gray-400">Reset to default</span>

          <div className="flex flex-row gap-2">
            <button className="px-3 py-1.5 rounded-lg text-xs text-gray-600 border">Cancel</button>
            <button className="px-3 py-1.5 rounded-lg text-xs text-white bg-gradient-to-r from-purple-600 to-violet-500 shadow">
              Save Preferences
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
