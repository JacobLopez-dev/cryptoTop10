import Particle from "./Particle"

function Hero() {
  return (
      <div className="hero h-96 bg-primary">
      <Particle/>
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Welcome</h1>
                <p className="py-6">
                    This is Crypto Top 10
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero