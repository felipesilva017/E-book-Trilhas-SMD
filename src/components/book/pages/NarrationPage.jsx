import talkingGif from '../../../assets/gif_talking.gif'
import { BrowserBar, InnerLine, StarAccent } from '../VisualAccents'
import PageFrame from '../PageFrame'

function NarrationPage() {
  return (
    <PageFrame
      ariaLabel="Pagina de narracao"
      className="bg-[radial-gradient(circle_at_86%_18%,rgba(255,128,0,0.2),transparent_40%),radial-gradient(circle_at_14%_86%,rgba(0,193,144,0.18),transparent_46%),#fcfbf7]"
    >
      <BrowserBar />
      <InnerLine />
      <StarAccent />

      <div className="relative z-20 flex h-[calc(100%-58px)] flex-col gap-3 px-[52px] pb-[92px] pt-[58px] max-lg:px-[26px] max-lg:pb-[76px] max-lg:pt-[42px]">
        <p className="m-0 text-[0.82rem] uppercase tracking-[0.13em] text-[#4a5b32]">
          Leitura Guiada
        </p>

        <div className="grid min-h-[180px] flex-1 place-items-center bg-transparent max-lg:min-h-[150px]" aria-label="GIF de narracao da pagina">
          <img
            src={talkingGif}
            alt="Pessoa narrando o conteudo da pagina"
            className="block h-full w-full min-h-0 object-contain"
          />
        </div>
      </div>
    </PageFrame>
  )
}

export default NarrationPage