'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { skillCategories } from '@/lib/constants';

export default function SkillsPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="container px-4 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <SectionHeader
            title="Technical Skills"
            description="A polished overview of the technologies, frameworks, and tools I use professionally."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <Card className="h-full card-gradient shadow-2xl shadow-primary/10">
                  <CardContent className="relative p-5 sm:p-7">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 text-primary shadow-inner shadow-black/10">
                        <CategoryIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                          {category.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                          {category.skills.length} competencies
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {category.skills.map((skill, idx) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-white/10"
                          >
                            <div className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0f172a] text-primary">
                              <SkillIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <span className="font-medium text-xs sm:text-sm text-white break-words">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
