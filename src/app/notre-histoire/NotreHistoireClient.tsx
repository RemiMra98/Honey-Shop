'use client';

import { motion } from 'framer-motion';
import { historyTimeline } from '@/lib/data';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function NotreHistoireClient() {
  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero */}
      <section
        className="relative py-28 px-4 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #1A3009 0%, #2D5016 50%, #3A6B1A 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20 Z' fill='none' stroke='%23F5C842' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 border border-honey/25 text-honey text-xs font-semibold tracking-widest uppercase mb-6">
            <span>📖</span>
            Notre histoire
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-cream mb-4 leading-tight">
            Une Famille,{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F5C842 0%, #D4A017 60%, #C8920D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              un Héritage
            </span>
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-2xl mx-auto">
            Depuis 1987, la famille Fontaine cultive l&apos;art de l&apos;apiculture dans
            le respect de la nature et des abeilles, de génération en génération.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <h2 className="font-playfair text-3xl font-bold text-dark mb-6">
              Trois ruches, un rêve
            </h2>
            <div className="space-y-4 text-dark/65 leading-relaxed">
              <p>
                Marcel Fontaine n&apos;était pas apiculteur par tradition. Il était menuisier. Mais en
                1987, en aidant un voisin à déplacer une ruche, il a eu le coup de foudre. La
                complexité de la colonie, l&apos;intelligence collective des abeilles, l&apos;alchimie du
                miel — tout l&apos;a fasciné.
              </p>
              <p>
                Il a installé ses trois premières ruches sur un coin de terrain hérité de son
                père, dans les garrigues du Lubéron. Sans formation, guidé seulement par les
                vieux livres d&apos;apiculture de la bibliothèque municipale et les conseils du
                voisin Fernand, il a appris à écouter les abeilles.
              </p>
              <p>
                Après quelques années de tâtonnements, les premières vraies récoltes sont
                arrivées. Marcel a commencé à les partager au marché du village, à Pertuis.
                Les retours ont été immédiats : ce miel avait quelque chose de différent.
              </p>
              <p>
                En 1995, convaincu depuis toujours que les abeilles prospèrent sans
                pesticides, Marcel a formalisé ce qu&apos;il pratiquait déjà : il a obtenu la
                certification Agriculture Biologique. Pas pour le marketing. Pour la cohérence.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
            {/* Image placeholder */}
            <div
              className="rounded-3xl overflow-hidden aspect-square shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #3D1F00 0%, #5C2E00 40%, #8B4513 70%, #D4A017 100%)',
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-cream">
                <div className="text-8xl mb-4">🧑‍🌾</div>
                <p className="font-playfair text-xl font-bold text-honey-light">Marcel Fontaine</p>
                <p className="text-cream/50 text-sm mt-1">Apiculteur · Fondateur</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bio certification section */}
        <motion.section
          id="bio"
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-20 p-8 rounded-3xl bg-forest/5 border border-forest/15"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center text-2xl flex-shrink-0">
              🌿
            </div>
            <div>
              <h2 id="bio" className="font-playfair text-2xl font-bold text-dark mb-2">
                Notre Certification Biologique
              </h2>
              <p className="text-dark/55 text-sm">
                Agriculture Biologique FR-BIO-01 · Certifiée depuis 1995
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-dark/65 text-sm leading-relaxed">
            <p>
              Notre certification bio n&apos;est pas un argument commercial, c&apos;est une conviction
              profonde. Marcel a toujours refusé d&apos;utiliser des pesticides, des antibiotiques,
              ou toute substance de synthèse dans ses ruches. Il savait, bien avant que la
              science le confirme, que les abeilles ont besoin d&apos;un environnement sain pour
              produire un miel sain.
            </p>
            <p>
              Nos ruches sont positionnées à minimum 3km de toute zone agricole conventionnelle.
              Les traitements anti-varroa sont effectués uniquement à base d&apos;acide oxalique
              naturel. L&apos;alimentation d&apos;appoint, rare mais parfois nécessaire en hiver, est
              toujours à base de miel ou de sirop de sucre biologique.
            </p>
          </div>
        </motion.section>

        {/* Pratiques section */}
        <motion.section
          id="pratiques"
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="font-playfair text-3xl font-bold text-dark mb-8 text-center">
            Nos Pratiques Apicoles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '🔄',
                title: 'Transhumance raisonnée',
                desc: 'Nos ruches voyagent selon les floraisons : Lubéron au printemps, alpages en été, châtaigneraies en automne. Un voyage naturel, jamais forcé.',
              },
              {
                emoji: '🍯',
                title: 'Extraction à froid',
                desc: 'Le miel n\'est jamais chauffé au-dessus de 40°C, préservant ainsi toutes ses enzymes, ses arômes et ses propriétés nutritionnelles.',
              },
              {
                emoji: '🔬',
                title: 'Contrôle qualité',
                desc: 'Chaque production est analysée par un laboratoire indépendant. Taux de sucre, d\'humidité, absence de résidus — nous n\'acceptons aucun compromis.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-honey/10 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-playfair font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-dark/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Abeilles section */}
        <motion.section
          id="abeilles"
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-20 p-8 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #FFF8E7 0%, #FEF3C7 100%)',
            border: '1px solid rgba(212,160,23,0.2)',
          }}
        >
          <h2 className="font-playfair text-3xl font-bold text-dark mb-6 text-center">
            Nos Abeilles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center text-6xl">🐝</div>
            <div className="space-y-3 text-dark/65 text-sm leading-relaxed">
              <p>
                Nous élevons principalement l&apos;Apis mellifera mellifera, l&apos;abeille noire locale,
                bien adaptée aux conditions climatiques de la région. Rustique, frugale et
                productive, elle s&apos;est imposée naturellement dans notre rucher.
              </p>
              <p>
                Une colonie saine compte entre 40 000 et 60 000 abeilles en pleine saison.
                Chaque abeille ouvrière vit 6 semaines et produit, sur toute sa vie, environ
                une demi-cuillère à café de miel. Pour remplir un pot de 500g, il faut le
                travail collectif de toute la colonie pendant plusieurs jours.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section {...fadeUp} transition={{ duration: 0.7 }}>
          <h2 className="font-playfair text-3xl font-bold text-dark mb-10 text-center">
            Les Dates Clés
          </h2>
          <div className="space-y-6">
            {historyTimeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="font-playfair text-lg font-black text-honey-deeper leading-none">
                    {event.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-honey/10 border border-honey/25 flex items-center justify-center text-base">
                  {event.icon}
                </div>
                <div className="flex-1 pb-6 border-b border-honey/10 last:border-0">
                  <h3 className="font-playfair font-bold text-dark mb-1">{event.title}</h3>
                  <p className="text-sm text-dark/55 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 p-8 rounded-3xl bg-dark text-cream"
        >
          <div className="text-4xl mb-4">🐝</div>
          <h3 className="font-playfair text-2xl font-bold mb-3">Rencontrez nos abeilles</h3>
          <p className="text-cream/55 text-sm mb-6 max-w-md mx-auto">
            Adoptez une ruche et recevez ses nouvelles toute l&apos;année. Votre prénom sur la ruche,
            son miel dans votre boîte aux lettres.
          </p>
          <Link
            href="/adoption-ruche"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-honey text-dark font-semibold rounded-full hover:bg-honey-light transition-all duration-300 hover:-translate-y-0.5"
          >
            Adopter une ruche →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
