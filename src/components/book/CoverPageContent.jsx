import {
  BrowserBar,
  InnerLine,
  OrbAccent,
  HandAccent,
  PageBadge,
  StarAccent,
} from './VisualAccents'

function CoverPageContent() {
  return (
    <div
      className="relative isolate h-full w-full overflow-hidden rounded-[7px] border-[4px] border-[#1a1a1a] bg-[radial-gradient(circle_at_82%_78%,rgba(241,112,183,0.27),transparent_34%),linear-gradient(180deg,#f8f8f8_0%,#f3f3f3_100%)]"
      aria-label="Capa do ebook SMD: Universos em Expansao"
    >
      <BrowserBar />
      <InnerLine />
      <StarAccent />
      <OrbAccent />

      <div className="relative z-30 mx-auto max-w-[82%] px-0 pt-[clamp(48px,10%,72px)] pb-[184px] text-center max-lg:max-w-[90%] max-lg:px-6 max-lg:pt-[52px] max-lg:pb-[120px]">
        <p className="mt-4 text-[clamp(0.9rem,1.8vw,1.5rem)] font-bold text-[#0f0f0f]">Sistemas e Midias Digitais - UFC</p>
        <h1 className="my-[15px] font-display text-[clamp(1.9rem,5.3vw,3.7rem)] leading-[0.98] tracking-[-0.01em] text-[#080808]">
          SMD: UNIVERSOS EM
          <br />
          EXPANSAO
        </h1>
        <p className="mx-auto max-w-[28ch] text-[clamp(0.95rem,1.5vw,1.28rem)] leading-[1.36] text-[#171717]">
          Um guia para voce que ainda nao sabe para onde ir.
        </p>
      </div>

      <HandAccent />
      <PageBadge>Pagina 1</PageBadge>
    </div>
  )
}

export default CoverPageContent
