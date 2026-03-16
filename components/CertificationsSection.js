export default function CertificationsSection() {
  const certifications = [
    'PORT REGISTRATION',
    'ISO',
    'APEDA',
    'RCMC',
    'FSSAI',
    'UDYAM',
    'GST',
    'IEC',
    'PHYTOSANITARY',
    'COA'
  ]

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom px-4 md:px-8">
        <h2 className="heading-xl text-center mb-4 text-2xl md:text-4xl">OUR CERTIFICATIONS</h2>
        <p className="body-text text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Every shipment from Destiny Global carries the weight of regulatory verification, not as a formaility, but as a non-negotiable standard. Here is what we hold:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="border-2 border-yellow-500 rounded p-3 md:p-6 text-center hover:bg-yellow-50 hover:border-yellow-600 transition cursor-pointer"
            >
              <p className="font-semibold text-xs md:text-sm text-gray-700">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
