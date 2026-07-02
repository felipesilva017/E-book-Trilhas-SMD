import { BrowserBar, InnerLine, PageBadge, StarAccent } from '../VisualAccents'
import PageFrame from '../PageFrame'

function ContentPage03() {
  return (
    <PageFrame
      ariaLabel="Pagina de conteudo 3"
      className="bg-[radial-gradient(circle_at_86%_18%,rgba(255,128,0,0.2),transparent_40%),radial-gradient(circle_at_14%_86%,rgba(0,193,144,0.18),transparent_46%),#fcfbf7]"
    >
      <BrowserBar />
      <InnerLine />
      <StarAccent />

      <div className="relative z-20 flex h-[calc(100%-58px)] flex-col gap-3 px-[52px] pb-[92px] pt-[58px] max-lg:px-[26px] max-lg:pb-[76px] max-lg:pt-[42px]">
        <p className="m-0 text-[0.82rem] uppercase tracking-[0.13em] text-[#4a5b32]">
          Encerramento
        </p>
        <h2 className="m-0 font-display text-[clamp(1.85rem,2.8vw,2.35rem)] leading-[1.06] text-[#0d120c]">
          Proximos Passos
        </h2>
        <p className="m-0 max-w-[38ch] text-[clamp(0.95rem,1.5vw,1.02rem)] leading-[1.55] text-[#293015]">
          Esta pagina fecha a sequencia inicial e pode virar um bloco de conclusao,
          chamada para acao ou qualquer outra composicao que voce quiser.
        </p>

        <div className="mt-2 grid max-w-[420px] gap-3 sm:grid-cols-2">
          <div className="rounded-[20px] border-[3px] border-[#1a1a1a] bg-[#ffffff] p-4 shadow-[0_8px_0_rgba(0,0,0,0.08)]">
            <p className="m-0 text-[0.82rem] uppercase tracking-[0.12em] text-[#4a5b32]">
              Revisao
            </p>
            <p className="m-0 mt-2 text-[0.95rem] leading-[1.5] text-[#293015]">
              Resuma os pontos mais importantes da jornada.
            </p>
          </div>

          <div className="rounded-[20px] border-[3px] border-[#1a1a1a] bg-[#ffffff] p-4 shadow-[0_8px_0_rgba(0,0,0,0.08)]">
            <p className="m-0 text-[0.82rem] uppercase tracking-[0.12em] text-[#4a5b32]">
              Proposta
            </p>
            <p className="m-0 mt-2 text-[0.95rem] leading-[1.5] text-[#293015]">
              Acrescente o encerramento visual ou a chamada final do ebook.
            </p>
          </div>
        </div>
      </div>

      <PageBadge>Pagina 3</PageBadge>
    </PageFrame>
  )
}

export default ContentPage03