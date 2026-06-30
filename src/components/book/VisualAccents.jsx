export function BrowserBar() {
  return (
    <header className="flex h-[54px] items-center gap-4 border-b-4 border-[#1a1a1a] bg-[#08bf72] px-5" aria-hidden="true">
      <span className="h-[18px] w-[18px] rounded-full bg-[#d8df4b]" />
      <span className="h-[18px] w-[18px] rounded-full bg-[#f1bc0d]" />
      <span className="h-[18px] w-[18px] rounded-full bg-[#75b8e1]" />
    </header>
  )
}

export function InnerLine() {
  return <div className="mx-auto h-1 w-[76%] bg-[#222222]" aria-hidden="true" />
}

export function StarAccent() {
  return (
    <div
      className="absolute right-[14px] top-[8px] z-20 h-[122px] w-[122px] bg-[radial-gradient(circle_at_36%_32%,#f7e568_0%,#ff8f00_44%,#ff5d00_100%)] [clip-path:polygon(50%_0%,64%_36%,100%_50%,64%_64%,50%_100%,36%_64%,0%_50%,36%_36%)] [filter:drop-shadow(0_4px_0_rgba(0,0,0,0.56))] max-lg:right-[10px] max-lg:top-[12px] max-lg:h-[82px] max-lg:w-[82px]"
      aria-hidden="true"
    />
  )
}

export function OrbAccent() {
  return (
    <div className="absolute bottom-[76px] left-[-68px] z-20 aspect-square w-[208px] rounded-full border-[4px] border-[#121212] bg-[radial-gradient(circle_at_24%_22%,#dff5ff_0%,rgba(223,245,255,0.7)_20%,transparent_35%),radial-gradient(circle_at_56%_48%,#01c98f_0%,#38c4f4_62%,#49a3db_100%)] shadow-[0_7px_0_rgba(0,0,0,0.2)] max-lg:bottom-[58px] max-lg:left-[-46px] max-lg:w-[132px]" aria-hidden="true" />
  )
}

export function HandAccent() {
  return (
    <div className="absolute bottom-[-24px] right-[-12px] z-20 h-[145px] w-[300px] rounded-[70px_10px_7px_30px] border-[4px] border-[#161616] bg-[#8f6d52] max-lg:h-[84px] max-lg:w-[172px]" aria-hidden="true">
      <span className="absolute left-[10px] top-[-8px] h-[26px] w-[64px] rounded-[16px] border-[3px] border-[#1d1d1d] bg-[#f2c21d] max-lg:h-[18px] max-lg:w-[42px]" />
    </div>
  )
}

export function PageBadge({ children }) {
  return (
    <span className="absolute bottom-[18px] right-[18px] z-30 rounded-full bg-[rgba(0,0,0,0.66)] px-3 py-[6px] text-[12px] uppercase tracking-[0.08em] text-white">
      {children}
    </span>
  )
}
