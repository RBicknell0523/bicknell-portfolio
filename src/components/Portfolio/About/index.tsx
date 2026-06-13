'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Shield, CheckCircle2, Clock } from 'lucide-react';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { MobileTextCycler } from '@/components/ui/mobile-text-cycler';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';

type Tab = 'stack' | 'certs';

const skills = [
  'React',
  'Next.js',
  'Node.js',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Sass/SCSS',
  'Tailwind CSS',
  'Redux',
  'MySQL',
  'Database Design',
  'Data Security & Privacy',
  'MongoDB',
  'Git',
  'GitHub',
  'Responsive Web Design',
  'Database Management',
  'Test-Driven Development (TDD)',
  'Error Handling',
  'Web Deployment',
  'Vite',
  'RESTful APIs',
  'TypeScript',
  'Performance Optimization',
];

const certifications = [
  { name: 'HTML/CSS Web Developer', status: 'earned' },
  { name: 'JavaScript Professional', status: 'earned' },
  { name: 'ReactJS Professional Developer', status: 'earned' },
  { name: 'MySQL', status: 'earned' },
  { name: 'Python', status: 'pending' },
];

const expEduItems: BentoItem[] = [
  {
    title: 'U.S. Army',
    meta: '2019 – 2026',
    description:
      'Noncommissioned Officer · Medical Supervisor · Fort Riley, KS',
    icon: <Shield className='text-primary h-4 w-4' />,
    status: '7 Years',
    tags: ['Leadership', 'Operations', 'Medical'],
    hasPersistentHover: true,
    bullets: [
      'Trained & mentored 500+ allied military personnel in operational and medical procedures',
      'Managed sensitive equipment and resources valued at $500,000+',
      'Led teams in high-pressure environments, improving mission execution and accountability',
      'Advised command leadership on preventative medicine and service member welfare',
    ],
  },
  {
    title: 'ERA Academy',
    meta: 'Feb 2026 – Jul 2026',
    description:
      'Full-stack web development academy covering front-end, back-end, database design, API integration, and responsive applications. Completed projects, assignments and tests demonstrating proficiency in HTML/CSS, JavaScript, React, Node.js, MySQL, Python and numerous modern development tools. Tested through the Coalition of Information Technology (COITB) certification exams.',
    icon: <GraduationCap className='text-primary h-4 w-4' />,
    status: 'In Progress',
    tags: ['Front-End', 'Back-End', 'Databases'],
  },
];

const About = () => {
  const [tab, setTab] = useState<Tab>('stack');

  return (
    <section id='about' data-animate>
      <div className='mx-auto max-w-[1170px] px-4 pt-20 pb-24 sm:px-8 xl:px-0'>
        {/* Top row: avatar + bio */}
        <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-[auto_1fr]'>
          {/* Left: avatar + social links */}
          <div className='flex flex-col items-center gap-5 lg:items-start'>
            <div className='border-border relative h-72 w-52 overflow-hidden rounded-xl border-2 sm:h-96 sm:w-64'>
              <Image
                src='/images/about/avatar.png'
                alt='Robert Bicknell'
                fill
                sizes='(max-width: 640px) 208px, 256px'
                className='object-cover object-top'
              />
            </div>

            <div className='flex gap-3'>
              <a
                href='https://github.com/RBicknell0523'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z' />
                </svg>
              </a>
              <a
                href='https://www.linkedin.com/in/robert-bicknell-81b04440b/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: bio + toggled content */}
          <div className='text-center lg:text-left'>
            <div className='mb-4 h-12 overflow-hidden'>
              <MobileTextCycler
                texts={['About Me', 'My Story', 'Who I Am']}
                className='md:hidden flex items-center justify-center lg:justify-start h-full text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent'
              />
              <div className='hidden md:block h-full'>
                <GooeyText
                  texts={['About Me', 'My Story', 'Who I Am']}
                  morphTime={1}
                  cooldownTime={2.5}
                  innerClassName='justify-center lg:justify-start'
                  className='h-full'
                  textClassName='text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent'
                />
              </div>
            </div>
            <div className='glass-card mx-auto mb-6 max-w-[600px] px-4 py-3 lg:mx-0'>
              <p className='text-foreground/75 leading-relaxed'>
                I'm a certified full stack web developer and seven-year U.S.
                Army veteran. My military career built disciplined execution,
                calm decision-making under pressure, and a proven record of
                leading teams and leading high-stakes responsibilities. Now I
                apply that same mission-focus to web development — trained in
                front-end and back-end through ERA Academy, I build reliable,
                responsive, and scalable applications. I'm passionate about my
                work, and I aim to leverage that passion with my military
                background and my web development skills to create impactful
                digital experiences and continue growing as a developer.
              </p>
            </div>

            {/* Tab toggle */}
            <div className='mb-4 flex justify-center gap-2 lg:justify-start'>
              {(['stack', 'certs'] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-md border px-3 py-1.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
                    tab === t
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {t === 'stack' ? 'Skills' : 'Certifications'}
                </button>
              ))}
            </div>

            {/* Fading panels */}
            <div className='relative min-h-[96px]'>
              {/* Tech Stack */}
              <div
                className={`flex flex-wrap justify-center gap-2 transition-opacity duration-300 lg:justify-start ${
                  tab === 'stack'
                    ? 'opacity-100'
                    : 'pointer-events-none absolute inset-0 opacity-0'
                }`}
              >
                {skills.map((skill) => (
                  <Badge key={skill} variant='secondary'>
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Certifications */}
              <div
                className={`flex flex-col gap-3 transition-opacity duration-300 ${
                  tab === 'certs'
                    ? 'opacity-100'
                    : 'pointer-events-none absolute inset-0 opacity-0'
                }`}
              >
                {certifications.map((cert) => (
                  <div key={cert.name} className='flex items-center gap-3'>
                    {cert.status === 'earned' ? (
                      <CheckCircle2 className='text-primary h-4 w-4 flex-shrink-0' />
                    ) : (
                      <Clock className='text-muted-foreground h-4 w-4 flex-shrink-0' />
                    )}
                    <span
                      className={`text-sm font-medium ${cert.status === 'earned' ? 'text-foreground' : 'text-muted-foreground'}`}
                    >
                      {cert.name}
                    </span>
                    {cert.status === 'pending' && (
                      <Badge
                        variant='outline'
                        className='text-muted-foreground text-xs'
                      >
                        In Progress
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='my-14 flex items-center gap-4'>
          <div className='to-primary/30 h-px flex-1 bg-gradient-to-r from-transparent' />
          <span className='text-foreground/40 text-xs font-semibold tracking-widest uppercase'>
            Experience &amp; Education
          </span>
          <div className='to-primary/30 h-px flex-1 bg-gradient-to-l from-transparent' />
        </div>

        {/* Experience + Education cards */}
        <BentoGrid items={expEduItems} className='md:grid-cols-2' />
      </div>
    </section>
  );
};

export default About;
