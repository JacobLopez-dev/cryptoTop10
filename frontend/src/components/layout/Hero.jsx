import Particle from "./Particle"

function Hero({title, description}) {
  return (
      <div className="hero h-96 bg-primary">
      <Particle/>
        <div className="hero-content text-center">
            <div className="max-w-md text-neutral-content">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">
                   {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero