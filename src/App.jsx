import { useCallback, useEffect, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import narracaoP1 from './assets/narracao_p1.m4a'
import ChapterPageContent from './components/book/ChapterPageContent'
import CoverPageContent from './components/book/CoverPageContent'
import FlipPage from './components/book/FlipPage'
import NarrationPageContent from './components/book/NarrationPageContent'

const pageSequence = [
  { pageNumber: 2, type: 'narration' },
  { pageNumber: 3, type: 'content' },
  { pageNumber: 4, type: 'narration' },
  { pageNumber: 5, type: 'content' },
  { pageNumber: 6, type: 'narration' },
  { pageNumber: 7, type: 'content' },
]

const narrationByPage = {
  1: narracaoP1,
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
    <main className="min-h-screen w-full px-3 py-3 sm:px-6 sm:py-6">
      <section
        className="mx-auto flex w-full max-w-[1080px] items-center justify-center rounded-[20px] bg-[linear-gradient(140deg,#f8f1bc_0%,#f5f2d5_40%,#e4e886_100%)] p-3 shadow-[0_22px_60px_rgba(50,42,18,0.2),inset_0_0_0_2px_rgba(129,106,32,0.28)] sm:p-7 lg:rounded-[28px]"
        aria-label="Visualizacao do ebook"
      >
        <HTMLFlipBook
          ref={flipBookRef}
          width={540}
          height={760}
          size="stretch"
          minWidth={300}
          maxWidth={560}
          minHeight={420}
          maxHeight={760}
          maxShadowOpacity={0.32}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handleFlip}
        >
          <FlipPage>
            <CoverPageContent />
          </FlipPage>

          {pageSequence.map(({ pageNumber, type }) => (
            <FlipPage key={pageNumber}>
              {type === 'narration' ? (
                <NarrationPageContent pageNumber={pageNumber} />
              ) : (
                <ChapterPageContent pageNumber={pageNumber} />
              )}
            </FlipPage>
          ))}
        </HTMLFlipBook>
      </section>
    </main>
  )
}

export default App
