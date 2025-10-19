import foto from "/cocktel2.jpg"
const HomePage = () => {
  return (
    <div className="bg-primary grid grid-cols-2">
      <div className="flex flex-col gap-4 p-8 justify-center">
          <h1 className="text-6xl text-secondary font-bold">Master Bar Academy</h1>
          <h2 className="text-4xl text-[#fbf7eb]">La mejor escuela del Perú</h2>
          <p className="text-2xl text-[#92989F]">Certifícate como bartender con nuestros programas integrales.</p>
          <p className="text-2xl text-[#92989F]"> 
  Aprende de expertos de la industria y domina el arte de la creación de cócteles.</p>
          <div className="flex gap-8 py-4">
          <button className="bg-secondary cursor-pointer px-4 py-2 text-xl rounded-2xl text-[#fbf7eb]">Inscríbete</button>
          <button className="bg-secondary cursor-pointer px-4 py-2 text-xl rounded-2xl text-[#fbf7eb]">Información</button>
          </div>
      </div>
      <div className="relative">
      <img src={foto} alt="" className="h-[calc(100vh-128px)] w-full"/>
      <button className="bg-secondary cursor-pointer p-2 text-xl rounded-2xl absolute right-0 bottom-0">Infssormación</button>
      </div>
    </div>
  )
}

export default HomePage