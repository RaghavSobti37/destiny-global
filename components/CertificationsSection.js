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
    'CDA'
  ]

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <h2 className="heading-xl text-center mb-4">OUR CERTIFICATIONS</h2>
        <p className="body-text text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Every shipment from Destiny Global carries the weight of regulatory certification — backed by industry 
          recognized standards and verified by authorities.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="border-2 border-yellow-500 rounded p-6 text-center hover:bg-yellow-50 hover:border-yellow-600 transition cursor-pointer"
            >
              <p className="font-semibold text-sm text-gray-700">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
