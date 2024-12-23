'use client';
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import GradientBackground from '@/components/GradientBackground'
import Navbar from '@/components/Navigation/Navbar'
import About from '@/components/Sections/About'
import Skills from '@/components/Sections/Skills'
import Projects from '@/components/Sections/Projects'
import Contact from '@/components/Sections/Contact'

const Scene = dynamic(() => import('@/components'), {
    ssr: false,
})

export default function Home() {
  return (
    <div className={styles.container}>
      <GradientBackground>
        <Navbar />
        <main className="relative">
          <section className="h-screen flex items-center justify-center">
            <Scene />
          </section>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </GradientBackground>
    </div>
  )
}