import foto from "../../public/cocktel2.jpg"
const HomePage = () => {
  return (
    <div className="bg-primary grid grid-cols-2 items-center">
      <div className="flex flex-col gap-4 px-8">
          <h1 className="text-6xl text-secondary font-bold">Master Bar Academy</h1>
          <h2 className="text-4xl text-[#fbf7eb]">La mejor escuela del Perú</h2>
          <p className="text-2xl text-[#92989F]">Certifícate como bartender con nuestros programas integrales.</p>
          <p className="text-2xl text-[#92989F]"> 
  Aprende de expertos de la industria y domina el arte de la creación de cócteles.</p>
          <div className="flex gap-8 py-4">
          <button className="bg-secondary cursor-pointer p-2 text-xl rounded-2xl">Inscríbete</button>
          <button className="bg-secondary cursor-pointer p-2 text-xl rounded-2xl">Información</button>
          </div>
      </div>
      <div className="z-10 p-0">
      <img src={foto} alt="" />

      </div>
    </div>
  )
}

export default HomePage