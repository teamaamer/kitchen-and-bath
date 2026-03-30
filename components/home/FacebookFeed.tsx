'use client'

import { motion } from 'framer-motion'

export default function FacebookFeed() {
  return (
    <section className="py-20 md:py-28 bg-[#f7f5ef] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-green text-sm font-medium tracking-widest uppercase mb-4"
          >
            Connect With Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 font-light"
          >
            Follow Us on Facebook
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-taupe text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Join our community for behind-the-scenes content, customer stories, and daily design inspiration
          </motion.p>
        </div>

        {/* Facebook Feed Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[500px] mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-luxury-white rounded-2xl shadow-lg overflow-hidden"
          >
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkbs.society%2F&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1642630743738561"
              width="500"
              height="700"
              style={{ border: 'none', overflow: 'hidden', width: '100%' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
