import React from 'react';

// Importar las imágenes
const imgDescargar11 = "/assets/b8427073aff10f483040528361c8aa09999ef8cf.png";
const imgImage5 = "/assets/3ba0329e00649f30c8229a3d1f2a1b59e468cd39.png";
const imgEllipse3 = "/assets/89a8b14209808147196a6aab83db85309023f8c3.svg";
const imgGroup1 = "/assets/c2d40aa13bbb9d851e19043b72e728b4f09542e1.svg";
const imgGroup2 = "/assets/636c3212a5003ed07ed09507fd9688560a9f9637.svg";
const imgTablerIconCircleArrowUpRightFilled = "/assets/13ac538fb5088fd5a402f7f920ea1b3a0a1ae8cf.svg";
const imgFooterIcons = "/assets/38dfe8d38719f4e2b6f8ed1bf411d002073c14ac.svg";

interface ButtonProps {
  className?: string;
  texto?: string;
  estado?: "normal" | "hover" | "active";
}

const Button: React.FC<ButtonProps> = ({ 
  className = "", 
  texto = "Value", 
  estado = "normal" 
}) => {
  return (
    <div className={className}>
      <p className="font-medium text-[29.75px] text-[#fbf7eb] whitespace-nowrap">
        {texto}
      </p>
    </div>
  );
};

interface CheckboxProps {
  className?: string;
  propiedad1?: "Frame 8" | "Frame 9";
  onClick?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
  className = "", 
  propiedad1 = "Frame 8",
  onClick 
}) => {
  return (
    <button className={className} onClick={onClick}>
      <div className="absolute left-0 top-0 w-6 h-6">
        <img alt="" className="w-full h-full" src={imgEllipse3} />
      </div>
    </button>
  );
};

interface Frame16Props {
  className?: string;
}

const Frame16: React.FC<Frame16Props> = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-10 items-center justify-center w-full h-[344px]">
        <div className="flex flex-col gap-10 items-center justify-center w-[439px]">
          <input
            type="text"
            placeholder="Nombres"
            className="w-[264px] px-[72px] py-0 border-b border-[#92989f] bg-transparent text-[#eafaf1] text-xl font-light placeholder-[#eafaf1]"
          />
          <input
            type="text"
            placeholder="Apellidos"
            className="w-[269px] px-[72px] py-0 border-b border-[#92989f] bg-transparent text-[#eafaf1] text-xl font-light placeholder-[#eafaf1]"
          />
          <input
            type="tel"
            placeholder="Celular"
            className="w-[269px] px-[72px] py-0 border-b border-[#92989f] bg-transparent text-[#eafaf1] text-xl font-light placeholder-[#eafaf1]"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-[270px] px-[72px] py-0 border-b border-[#92989f] bg-transparent text-[#eafaf1] text-xl font-light placeholder-[#eafaf1]"
          />
          <p className="text-[#92989f] text-xl font-semibold text-center w-full">
            ¿Por donde quiere ser contactado?
          </p>
          <div className="flex gap-[58px] items-center justify-center w-full">
            <div className="flex gap-[17px] items-center">
              <Checkbox className="relative w-6 h-6 cursor-pointer" />
              <p className="text-[#92989f] text-xl font-medium whitespace-nowrap">
                WhatsApp
              </p>
            </div>
            <div className="flex gap-[17px] items-center">
              <Checkbox className="relative w-6 h-6 cursor-pointer" />
              <p className="text-white text-xl font-medium whitespace-nowrap">
                Celular
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button
        texto="Solicitar Información"
        className="flex gap-[10px] items-center justify-center p-4 bg-[#d4af37] rounded-lg"
      />
    </div>
  );
};

const HomePageFigma: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#0d1b2a]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute left-[69px] top-[230px]">
          <h1 className="text-[64px] text-[#d4af37] font-semibold font-['Playfair_Display']">
            Master Bar Academy
          </h1>
          <div className="mt-[80px]">
            <h2 className="text-[40px] text-white font-medium">
              La mejor escuela del Perú
            </h2>
            <div className="mt-[20px] text-[24px] text-[#92989f] font-medium max-w-[633px]">
              <p className="mb-2">
                Certifícate como bartender con nuestros programas integrales.
              </p>
              <p>
                Aprende de expertos de la industria y domina el arte de la creación de cócteles.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-[38px]">
            <Button
              texto="Inscríbete"
              className="flex gap-[10px] items-center justify-center p-4 bg-[#d4af37] rounded-lg"
            />
            <Button
              texto="Información"
              className="flex gap-[10px] items-center justify-center p-4 bg-[#f2e6c1] rounded-lg"
            />
          </div>
        </div>
        <div className="absolute right-0 top-[92px] w-[712px] h-[756px]">
          <img
            src={imgImage5}
            alt="Bartender preparando cocktail"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Programas Section */}
      <section className="relative py-20">
        <h2 className="text-[64px] text-[#92989f] font-normal font-['Playfair_Display'] text-center mb-16">
          Nuestros Programas
        </h2>
        
        {/* Certificación Profesional */}
        <div className="flex gap-20 px-[calc(8.333%+28px)] mb-20">
          <div className="w-[563px] h-[337px] rounded-2xl overflow-hidden">
            <video
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
              src="/_videos/v1/fcdd002201d4e5086a813cb730d0a6305e13bbb5"
            />
          </div>
          <div className="flex flex-col gap-5 max-w-[522px]">
            <h3 className="text-[32px] text-[#d4af37] font-semibold">
              Certificación Profesional de Coctelería
            </h3>
            <p className="text-xl text-[#fbf7eb]">
              Nuestro programa cubre todos los aspectos de la coctelería,
              desde técnicas básicas hasta mixología avanzada.
              Adquiere experiencia práctica y obtén una certificación reconocida.
            </p>
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col items-center gap-4">
                <img src={imgGroup1} alt="" className="w-[76px] h-[76px]" />
                <p className="text-base text-white text-center">
                  Cursos 100%<br />prácticos
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={imgGroup2} alt="" className="w-[76px] h-[76px]" />
                <p className="text-base text-white text-center">
                  Reconocidos<br />profesores
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-[76px] h-[76px] bg-[#f2e6c1] rounded-full flex items-center justify-center">
                  <img
                    src={imgTablerIconCircleArrowUpRightFilled}
                    alt=""
                    className="w-9 h-9"
                  />
                </div>
                <p className="text-base text-white text-center">
                  Rápida<br />Empleabilidad
                </p>
              </div>
            </div>
            <Button
              texto="Inscríbete"
              className="flex gap-[10px] items-center justify-center p-4 bg-[#d4af37] rounded-lg w-fit mt-4"
            />
          </div>
        </div>

        {/* Taller Avanzado */}
        <div className="flex gap-20 px-[calc(8.333%+18px)]">
          <div className="flex flex-col gap-5 max-w-[498px]">
            <h3 className="text-[32px] text-[#d4af37] font-semibold">
              Taller Avanzado de Mixología
            </h3>
            <p className="text-xl text-[#f9f3e1]">
              Mejora tus habilidades con nuestro taller avanzado. Nos centramos en el diseño
              innovador de cócteles, la mixología molecular y la gestión de barras.
            </p>
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col items-center gap-4">
                <img src={imgGroup1} alt="" className="w-[76px] h-[76px]" />
                <p className="text-base text-white text-center">
                  Cursos 100%<br />prácticos
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={imgGroup2} alt="" className="w-[76px] h-[76px]" />
                <p className="text-base text-white text-center">
                  Reconocidos<br />profesores
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-[76px] h-[76px] bg-[#f2e6c1] rounded-full flex items-center justify-center">
                  <img
                    src={imgTablerIconCircleArrowUpRightFilled}
                    alt=""
                    className="w-9 h-9"
                  />
                </div>
                <p className="text-base text-white text-center">
                  Rápida<br />Empleabilidad
                </p>
              </div>
            </div>
            <Button
              texto="Inscríbete"
              className="flex gap-[10px] items-center justify-center p-4 bg-[#d4af37] rounded-lg w-fit mt-4"
            />
          </div>
          <div className="w-[584px] h-[329px] rounded-2xl overflow-hidden">
            <video
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
              src="/_videos/v1/bab37bbd549468885459bb8c9531f2aee38d2e70"
            />
          </div>
        </div>
      </section>

      {/* Información Section */}
      <section className="relative py-20">
        <h2 className="text-[64px] text-[#92989f] font-normal font-['Playfair_Display'] text-center mb-16">
          Recibe Información
        </h2>
        <div className="flex gap-20 px-[calc(8.333%+28px)]">
          <div className="w-[467px] h-[584px] overflow-hidden">
            <img
              src={imgDescargar11}
              alt="Bartender"
              className="w-full h-full object-cover"
            />
          </div>
          <Frame16 className="flex flex-col gap-[30px] items-center bg-[#09141f] rounded-lg p-12 w-[614px]" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-20 pb-10">
        <div className="text-center mb-16">
          <h2 className="text-[96px] text-[#d4af37] font-semibold font-['Playfair_Display']">
            Master Bar Academy
          </h2>
        </div>
        <div className="flex justify-between px-[calc(8.333%+28px)] mb-16">
          <nav className="flex flex-col gap-6 text-[#f9f3e1] text-2xl font-semibold">
            <a href="#inicio">Inicio</a>
            <a href="#recetas">Recetas</a>
            <a href="#favoritos">Favoritos</a>
            <a href="#ia">Generar con IA</a>
          </nav>
          <div className="flex items-center gap-4">
            <img src={imgFooterIcons} alt="Redes sociales" className="h-[49px]" />
          </div>
        </div>
        <div className="mx-[calc(8.333%+28px)]">
          <div className="bg-[#1a2e45] rounded-lg p-[10px] text-center">
            <p className="text-[#92989f] text-2xl font-semibold">
              Todos los derechos reservados | 2025 Master Bar Academy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageFigma;
