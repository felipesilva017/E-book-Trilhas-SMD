import {
  BrowserBar,
  InnerLine,
  OrbAccent,
  HandAccent,
  StarAccent,
} from '../VisualAccents'
import PageFrame from '../PageFrame'

function CoverPage() {
  return (
    <PageFrame
      ariaLabel="Capa do ebook SMD: Universos em Expansao"
      className="bg-[radial-gradient(circle_at_82%_78%,rgba(241,112,183,0.27),transparent_34%),linear-gradient(180deg,#f8f8f8_0%,#f3f3f3_100%)]"
    >
      <BrowserBar />
      <InnerLine />
      <StarAccent />
      <OrbAccent />

      <div className="relative z-30 mx-auto max-w-[82%] px-0 pt-[clamp(48px,10%,72px)] pb-[184px] text-center max-lg:max-w-[90%] max-lg:px-6 max-lg:pt-[52px] max-lg:pb-[120px]">
        <p className="mt-4 text-[clamp(0.9rem,1.8vw,1.5rem)] font-bold text-[#0f0f0f]">
          Sistemas e Midias Digitais - UFC
        </p>
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
    </PageFrame>
  )
}

export default CoverPage