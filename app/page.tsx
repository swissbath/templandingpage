import { Droplets, Waves, Leaf } from 'lucide-react'

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50 to-white text-slate-900">
      {/* Subtle water-inspired background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 opacity-3 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300 opacity-3 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-200 opacity-2 blur-3xl rounded-full" />
      </div>

      {/* Horizontal dividing lines - water flow element */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50" />
      <div className="absolute top-1/3 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-30" />

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          {/* Wellness Badge */}
          <div className="mb-8 inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Droplets className="h-4 w-4" />
              Luxury Spa Experience
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-8 font-sans text-5xl font-light leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            A new digital
            <br />
            <span className="font-normal">
              wellness <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">experience</span>
            </span>
            <br />
            <span className="font-light text-slate-500">is unfolding</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 font-light leading-relaxed">
            Discover the intersection of luxury and wellness. We&apos;re creating a digital sanctuary where premium spa fixtures, innovative design, and your well-being converge.
          </p>

          {/* Wellness Features Grid */}
          <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-3">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
              <div className="relative flex flex-col items-center gap-3 rounded-lg border border-blue-100 bg-white/60 backdrop-blur-sm p-6 hover:border-blue-300 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 group-hover:scale-110 transition-transform">
                  <Waves className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Pure Relaxation</h3>
                <p className="text-sm text-slate-600">Designed for ultimate comfort and tranquility</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
              <div className="relative flex flex-col items-center gap-3 rounded-lg border border-slate-200 bg-white/60 backdrop-blur-sm p-6 hover:border-slate-300 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 group-hover:scale-110 transition-transform">
                  <Droplets className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="font-semibold text-slate-900">Crafted Excellence</h3>
                <p className="text-sm text-slate-600">Premium fixtures engineered for longevity</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
              <div className="relative flex flex-col items-center gap-3 rounded-lg border border-red-100 bg-white/60 backdrop-blur-sm p-6 hover:border-red-300 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 group-hover:scale-110 transition-transform">
                  <Leaf className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Sustainable Living</h3>
                <p className="text-sm text-slate-600">Luxury that respects wellness and nature</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          {/* Newsletter CTA */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">Be notified when we launch</p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-slate-300 bg-white/70 px-5 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 backdrop-blur-sm"
              />
              <button
                className="px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                Notify Me
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 space-y-2 border-t border-slate-200 pt-8">
            <p className="text-sm font-medium text-slate-900">
              Swiss Reinz International
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Est. 1996 · Crafted for Well-being
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
          <div className="flex animate-bounce flex-col items-center">
            <svg
              className="h-5 w-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  )
}
