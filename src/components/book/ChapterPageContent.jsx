import { BrowserBar, InnerLine, PageBadge, StarAccent } from './VisualAccents'

function ChapterPageContent({ pageNumber }) {
  return (
    <div className="relative isolate h-full w-full overflow-hidden rounded-[7px] border-[4px] border-[#1a1a1a] bg-[radial-gradient(circle_at_86%_18%,rgba(255,128,0,0.2),transparent_40%),radial-gradient(circle_at_14%_86%,rgba(0,193,144,0.18),transparent_46%),#fcfbf7]">
      <BrowserBar />
      <InnerLine />
      <StarAccent />

      <div className="relative z-20 flex h-[calc(100%-58px)] flex-col gap-3 px-[52px] pb-[92px] pt-[58px] max-lg:px-[26px] max-lg:pb-[76px] max-lg:pt-[42px]">
        <p className="m-0 text-[0.82rem] uppercase tracking-[0.13em] text-[#4a5b32]">Capitulo 01</p>
        <h2 className="m-0 font-display text-[clamp(1.85rem,2.8vw,2.35rem)] leading-[1.06] text-[#0d120c]">
          Introducao
        </h2>
        <p className="m-0 max-w-[38ch] text-[clamp(0.95rem,1.5vw,1.02rem)] leading-[1.55] text-[#293015]">
          Esta pagina usa os mesmos componentes visuais da capa para manter unidade
          grafica ao longo do ebook.
        </p>
        <small className="mt-2 text-[0.82rem] leading-[1.35] text-[#5e6654]">
          Use as setas esquerda e direita para virar.
        </small>
      </div>

      <PageBadge>Pagina {pageNumber}</PageBadge>
    </div>
  )
}

export default ChapterPageContent
