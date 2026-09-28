import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { RoomControlRow } from './RoomControlRow';
import { rooms } from '../../data/rooms';

export function SmartRooms() {
  const [activeIndex, setActiveIndex] = useState(0);
  const room = rooms[activeIndex];

  return (
    <section
      id="experience"
      aria-labelledby="rooms-heading"
      className="relative h-screen min-h-[780px] w-full overflow-hidden bg-ink">
      
      <AnimatePresence initial={false}>
        <motion.img
          key={room.id}
          src={room.image}
          alt={room.imageAlt}
          initial={{ opacity: 0, scale: 1.06, zIndex: 1 }}
          animate={{
            opacity: 1,
            scale: 1,
            zIndex: 1,
            transition: {
              opacity: { duration: 0.3, ease: 'easeOut' },
              scale: { duration: 1.4, ease: [0.23, 1, 0.32, 1] }
            }
          }}
          exit={{ opacity: 1, zIndex: 0, transition: { duration: 0.35 } }}
          className="absolute inset-0 h-full w-full object-cover" />
        
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-ink/85 via-ink/35 to-transparent dark:from-ink/90 dark:via-ink/45 dark:to-ink/10" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink via-transparent to-ink/60 dark:from-ink dark:via-transparent dark:to-ink/70" />

      <div className="relative z-[3] mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-12 pt-28 md:px-12 md:pb-16">
        <div className="max-w-xl">
          <SectionLabel>Smart Rooms</SectionLabel>
          <h2
            id="rooms-heading"
            className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-paper md:text-6xl">
            
            Every room, its own intelligence.
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <nav aria-label="Rooms">
            <ol className="no-scrollbar -mx-6 flex gap-5 overflow-x-auto px-6 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0">
              {rooms.map((r, i) => {
                const active = i === activeIndex;
                return (
                  <li key={r.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-pressed={active}
                      className="group flex items-center gap-3 whitespace-nowrap py-1.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:gap-4">
                      
                      <span className={`font-display text-xs tabular-nums transition-colors ${active ? 'text-accent font-semibold' : 'text-muted'}`}>0{i + 1}</span>
                      <span
                        className={`h-px transition-[width,background-color] duration-300 ease-out-expo ${
                        active ? 'w-10 bg-accent lg:w-14' : 'w-4 bg-paper/30 group-hover:w-8'}`
                        } />
                      
                      <span
                        className={`font-display text-lg font-medium tracking-tight transition-colors duration-200 lg:text-4xl ${
                        active ? 'text-paper font-semibold' : 'text-muted hover:text-paper'}`
                        }>
                        
                        {r.name}
                      </span>
                    </button>
                  </li>);

              })}
            </ol>
          </nav>

          <div className="w-full rounded-[28px] border border-paper/15 bg-surface/95 p-3 shadow-2xl backdrop-blur-2xl dark:border-paper/10 dark:bg-ink/55 lg:w-[380px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={room.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}>
                
                <div className="flex items-center justify-between px-4 pb-3 pt-3">
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-paper">{room.name}</p>
                    <p className="mt-1 text-xs text-muted font-medium">{room.summary}</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Live
                  </span>
                </div>
                <ul className="divide-y divide-paper/10 border-t border-paper/10">
                  {room.controls.map((control, i) =>
                  <motion.li
                    key={`${room.id}-${control.label}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 + i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                    className="py-1">
                    
                      <RoomControlRow control={control} />
                    </motion.li>
                  )}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}