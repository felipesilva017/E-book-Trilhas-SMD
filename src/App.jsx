import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import narracaoCapa from './assets/narracao_capa.ogg'
import narracaoP1 from './assets/narracao_p1.ogg'
import narracaoP2 from './assets/narracao_p2.ogg'
import narracaoP3 from './assets/narracao_p3.ogg'
import narracaoP4 from './assets/narracao_p4.ogg'
import narracaoP5 from './assets/narracao_p5.ogg'
import narracaoP6 from './assets/narracao_p6.ogg'
import narracaoP7 from './assets/narracao_p7.ogg'
import narracaoP8 from './assets/narracao_p8.ogg'
import narracaoP9 from './assets/narracao_p9.ogg'
import FlipPage from './components/book/FlipPage'
import CoverPage from './components/book/pages/CoverPage'
import NarrationPage from './components/book/pages/NarrationPage'
import ContentPage01 from './components/book/pages/ContentPage01'
import ContentPage02 from './components/book/pages/ContentPage02'
import ContentPage03 from './components/book/pages/ContentPage03'
import ContentPage04 from './components/book/pages/ContentPage04'
import ContentPage05 from './components/book/pages/ContentPage05'
import ContentPage06 from './components/book/pages/ContentPage06'
import ContentPage07 from './components/book/pages/ContentPage07'
import ContentPage08 from './components/book/pages/ContentPage08'
import ContentPage09 from './components/book/pages/ContentPage09'


const pageSequence = [
  { key: 'page-01', Component: CoverPage },
  { key: 'page-02', Component: NarrationPage },
  { key: 'page-03', Component: ContentPage01 },
  { key: 'page-04', Component: NarrationPage },
  { key: 'page-05', Component: ContentPage02 },
  { key: 'page-06', Component: NarrationPage },
  { key: 'page-07', Component: ContentPage03 },
  { key: 'page-08', Component: NarrationPage },
  { key: 'page-09', Component: ContentPage04 },
  { key: 'page-10', Component: NarrationPage },
  { key: 'page-11', Component: ContentPage05 },
  { key: 'page-12', Component: NarrationPage },
  { key: 'page-13', Component: ContentPage06 },
  { key: 'page-14', Component: NarrationPage },
  { key: 'page-15', Component: ContentPage07 },
  { key: 'page-16', Component: NarrationPage },
  { key: 'page-17', Component: ContentPage08 },
  { key: 'page-18', Component: NarrationPage },
  { key: 'page-19', Component: ContentPage09 },
]

const narrationByPage = {
  1: narracaoCapa,
  2: narracaoP1,
  4: narracaoP2,
  6: narracaoP3,
  8: narracaoP4,
  10: narracaoP5,
  12: narracaoP6,
  14: narracaoP7,
  16: narracaoP8,
  18: narracaoP9
}

const PAGE_ASPECT_RATIO = 720 / 1024
const MIN_PAGE_WIDTH = 320
const MAX_PAGE_WIDTH = 540

function getBookSize() {
  const availableWidth = window.innerWidth - 32
  const availableHeight = window.innerHeight - 32

  const widthFromViewport = availableWidth / 2
  const widthFromHeight = availableHeight * PAGE_ASPECT_RATIO
  const pageWidth = Math.min(
    MAX_PAGE_WIDTH,
    Math.max(MIN_PAGE_WIDTH, Math.floor(Math.min(widthFromViewport, widthFromHeight))),
  )

  return {
    width: pageWidth,
    height: Math.floor(pageWidth / PAGE_ASPECT_RATIO),
  }
}

function App() {
  const flipBookRef = useRef(null)
  const audioRef = useRef(null)
  const currentPageRef = useRef(1)
  const [bookSize, setBookSize] = useState(() => getBookSize())

  useEffect(() => {
    function onResize() {
      setBookSize(getBookSize())
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const playNarrationForPage = useCallback(
    (pageNumber) => {
      const currentAudio = audioRef.current

      if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
      }

      const narrationSrc = narrationByPage[pageNumber]

      if (!narrationSrc) {
        audioRef.current = null
        return
      }

      const nextAudio = new Audio(narrationSrc)
      nextAudio.preload = 'auto'
      audioRef.current = nextAudio

      nextAudio.play().catch(() => {
        // Playback may be blocked by browser policies until user gesture.
      })
    },
    [],
  )

  useEffect(() => {
    function onKeyDown(event) {
      const target = event.target
      const isEditable =
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA')

      if (isEditable) {
        return
      }

      const pageFlip = flipBookRef.current?.pageFlip()

      if (!pageFlip) {
        return
      }

      if (event.key === 'ArrowRight') {
        pageFlip.flipNext()
      }

      if (event.key === 'ArrowLeft') {
        pageFlip.flipPrev()
      }

      if (event.key === 'ArrowUp') {
        playNarrationForPage(currentPageRef.current)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [playNarrationForPage])

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const flipBookStyle = useMemo(
    () => ({
      width: `${bookSize.width}px`,
      height: `${bookSize.height}px`,
    }),
    [bookSize.height, bookSize.width],
  )

  function handleFlip(event) {
    if (typeof event?.data !== 'number') {
      return
    }

    currentPageRef.current = event.data + 1
    playNarrationForPage(currentPageRef.current)
  }

  return (
    <main className="h-[100svh] w-full overflow-hidden px-2 py-2 sm:px-4 sm:py-4">
      <section
        className="mx-auto flex h-full w-full max-w-none items-center justify-center rounded-[20px] bg-[linear-gradient(140deg,#f8f1bc_0%,#f5f2d5_40%,#e4e886_100%)] p-2 shadow-[0_22px_60px_rgba(50,42,18,0.2),inset_0_0_0_2px_rgba(129,106,32,0.28)] sm:p-4 lg:rounded-[28px]"
        aria-label="Visualizacao do ebook"
      >
        <HTMLFlipBook
          ref={flipBookRef}
          width={bookSize.width}
          height={bookSize.height}
          style={flipBookStyle}
          maxShadowOpacity={0.32}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handleFlip}
        >
          {pageSequence.map(({ key, Component }) => (
            <FlipPage key={key}>
              <Component />
            </FlipPage>
          ))}
        </HTMLFlipBook>
      </section>
    </main>
  )
}

export default App
