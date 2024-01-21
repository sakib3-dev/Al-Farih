import React from 'react'
import ContactFrom from './ContactFrom'
import ContactInfo from './ContactInfo'
import BreadCrumbs from '../component/BreadCrumbs'

export default function page() {
  return (
    <section className="pt-32 md:pt-36 px-4" id="contact">
      <div className="container mx-auto">

        <BreadCrumbs className="mb-10" CurrentPage="Contact" />

        <div className=" border-b border-[#ebebeb] mb-16">
          {/* map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.70032253162!2d90.34355871268643!3d23.794581992069563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1703872407201!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* map */}

          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <ContactInfo />
            <ContactFrom />
          </div>
        </div>
      </div>
    </section>
  )
}
