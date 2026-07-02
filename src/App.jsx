import { useCallback, useEffect, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import narracaoP1 from './assets/narracao_p1.m4a'
import FlipPage from './components/book/FlipPage'
import CoverPage from './components/book/pages/CoverPage'
import NarrationPage from './components/book/pages/NarrationPage'
import ContentPage01 from './components/book/pages/ContentPage01'
import ContentPage02 from './components/book/pages/ContentPage02'
import ContentPage03 from './components/book/pages/ContentPage03'

const pageSequence = [
  { key: 'page-01', Component: CoverPage },
  { key: 'page-02', Component: NarrationPage },
  { key: 'page-03', Component: ContentPage01 },
  { key: 'page-04', Component: NarrationPage },
  { key: 'page-05', Component: ContentPage02 },
  { key: 'page-06', Component: NarrationPage },
  { key: 'page-07', Component: ContentPage03 },
]

const narrationByPage = {
  2: narracaoP1,
}

function App() {
  const flipBookRef = useRef(null)
  const audioRef = useRef(null)
  const currentPageRef = useRef(1)

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
          width={720}
          height={1024}
          size="stretch"
          minWidth={420}
          maxWidth={960}
          minHeight={600}
          maxHeight={1360}
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
