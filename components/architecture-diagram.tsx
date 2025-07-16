import Image from 'next/image'

export default function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Image
        src="/images/openbiocure.webp"
        alt="OpenBioCure Architecture Diagram"
        width={1200}
        height={800}
        className="w-full h-auto"
        priority
      />
    </div>
  )
}

