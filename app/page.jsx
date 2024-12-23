'use client';
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import GradientBackground from '@/components/GradientBackground'
import Navbar from '@/components/Navigation/Navbar'
import About from '@/components/Sections/About'
import Skills from '@/components/Sections/Skills'
import Projects from '@/components/Sections/Projects'
import Contact from '@/components/Sections/Contact'
import Gallup from '@/components/Sections/Gallup'

const Scene = dynamic(() => import('@/components'), {
    ssr: false,
})

export default function Home() {
  return (
    <div className={styles.container}>
      <GradientBackground>
        <Navbar />
        <main>
          <section className="h-screen relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Scene />
            </div>
          </section>
          <About />
          <Gallup />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </GradientBackground>
    </div>
  )
}