import { BrowserBar, InnerLine, PageBadge, StarAccent } from '../VisualAccents'
import PageFrame from '../PageFrame'

function ContentPage01() {
  return (
    <PageFrame
      ariaLabel="Pagina de conteudo 1"
      className="bg-[radial-gradient(circle_at_86%_18%,rgba(255,128,0,0.2),transparent_40%),radial-gradient(circle_at_14%_86%,rgba(0,193,144,0.18),transparent_46%),#fcfbf7]"
    >
      <BrowserBar />
      <InnerLine />
      <StarAccent />

      <div className="relative z-20 flex h-[calc(80%-58px)] flex-col justify-center gap-6 px-[52px] pb-[136px] max-lg:px-[26px] max-lg:pb-[124px] max-lg:pt-[42px]">
        <div className="flex w-full max-w-[72ch] flex-col gap-4">
          <h2 className="m-0 font-display text-[clamp(1.1rem,1.6vw,1.4rem)] leading-[1.06] text-[#0d120c]">
            Trilhas do SMD:
            <br />
            O Despertar da Convergência
          </h2>
          <p className="m-0 max-w-[60ch] text-[clamp(0.95rem,1.5vw,1.02rem)] leading-[1.65] text-[#293015] text-justify">
            Durante muito tempo, o mundo dividiu a lógica e a arte. De um lado, quem programava; do outro, quem desenhava. Mas as novas tecnologias exigiram um novo tipo de mente. Em 2009, nasceu um espaço para unir esses dois universos. 
            <br />
            <br />
            <strong>Bem-vindo ao SMD!</strong> Vire a página e descubra os caminhos que você pode criar.
          </p>
        </div> 
      </div>

      <footer className="absolute inset-x-0 bottom-[18px] z-30 flex items-end justify-between gap-4 px-[52px] max-lg:flex-col max-lg:items-start max-lg:px-[26px]">
        <small className="max-w-[30ch] text-[0.82rem] leading-[1.35] text-[#5e6654] max-lg:max-w-none">
          Passe a mão no sensor para esquerda ou direita para virar.
        </small>  
      </footer>
      <PageBadge>Pagina 1</PageBadge>
    </PageFrame>
  )
}

export default ContentPage01