import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { CtaButton } from '../ui/CtaButton';
import { projectsData, ProjectCaseStudy } from '../../data/projects';
import { scrollToSection } from '../../hooks/useSmoothScroll';
import {
  MapPinIcon,
  CheckCircleIcon,
  LayersIcon,
  QuoteIcon,
  ArrowRightIcon,
  SparklesIcon
} from 'lucide-react';

export function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState<'All' | 'Residential' | 'Commercial' | 'Retrofit'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy>(projectsData[0]);

  const filtered =
    activeTab === 'All'
      ? projectsData
      : projectsData.filter((p) => p.type.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Portfolio & Case Studies</SectionLabel>
            <h2
              id="projects-heading"
              className="mt-6 font-display text-[clamp(2.5rem,5.5vw,5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper"
            >
              Completed
              <br />
              Projects.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Explore our real-world residential, commercial, and zero-rewiring retrofit installations across Hyderabad’s premier localities.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {['All', 'Residential', 'Commercial', 'Retrofit'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab as any)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-accent text-white dark:text-ink shadow-md'
                  : 'border border-paper/15 bg-surface text-paper/75 hover:border-paper/30 hover:text-paper'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(project)}
              className={`flex flex-col justify-between overflow-hidden rounded-3xl border transition-all cursor-pointer ${
                selectedProject.id === project.id
                  ? 'border-accent bg-surface shadow-xl shadow-accent/10 ring-1 ring-accent/30'
                  : 'border-paper/10 bg-surface/60 hover:border-paper/25 hover:bg-surface'
              }`}
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-surface/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/40 backdrop-blur-md">
                    {project.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-medium text-paper">
                  <MapPinIcon className="h-3.5 w-3.5 text-accent" />
                  {project.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-lg font-bold text-paper">
                    {project.title}
                  </h4>
                  <div className="mt-3">
                    <span className="text-[10px] font-mono text-muted uppercase tracking-wider">Client Need:</span>
                    <p className="mt-0.5 text-xs text-paper/75 line-clamp-2">
                      {project.clientReq}
                    </p>
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] font-mono text-muted uppercase tracking-wider">AIIVA Solution:</span>
                    <p className="mt-0.5 text-xs text-paper/75 line-clamp-2">
                      {project.solutionProvided}
                    </p>
                  </div>
                </div>

                {/* Products used tags */}
                <div className="mt-5 border-t border-paper/10 pt-4">
                  <span className="text-[10px] font-semibold text-accent uppercase tracking-wider block mb-2">
                    Key Products Installed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.productsUsed.slice(0, 2).map((prod, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-paper/5 px-2.5 py-1 text-[10px] text-paper/80 border border-paper/10"
                      >
                        {prod}
                      </span>
                    ))}
                    {project.productsUsed.length > 2 && (
                      <span className="rounded-lg bg-paper/5 px-2 py-1 text-[10px] text-muted">
                        +{project.productsUsed.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Spotlight */}
        {selectedProject.testimonial && (
          <div className="mt-16 rounded-3xl border border-accent/20 bg-surface/90 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <QuoteIcon className="absolute right-8 bottom-6 h-24 w-24 text-paper/[0.04] pointer-events-none" />
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                <SparklesIcon className="h-4 w-4" />
                Client Feedback · {selectedProject.location}
              </div>
              <blockquote className="font-display text-lg md:text-2xl font-medium text-paper leading-relaxed">
                "{selectedProject.testimonial.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-bold text-accent">
                  {selectedProject.testimonial.clientName[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-paper">
                    {selectedProject.testimonial.clientName}
                  </div>
                  <div className="text-xs text-muted">
                    {selectedProject.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
