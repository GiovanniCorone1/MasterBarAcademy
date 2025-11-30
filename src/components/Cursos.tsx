import { CardCursos } from "./CardCursos";
const courses = [
  {
    id: 1,
    title: 'Bartender Profesional',
    description: 'Formación completa en técnicas de barra, preparación de cócteles, servicio al cliente y manejo profesional de herramientas.',
    duration: '8 meses',
    students: '2,500+',
    level: 'Brochure',
    color: 'bg-blue-950',
  },
  {
    id: 2,
    title: 'Coctelería Clásica y Contemporánea',
    description: 'Aprende los cócteles clásicos reconocidos mundialmente y sus versiones modernas, con enfoque en técnica y presentación.',
    duration: '4 meses',
    students: '1,800+',
    level: 'Principiante',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 3,
    title: 'Coctelería de Autor',
    description: 'Crea recetas originales combinando técnicas avanzadas, equilibrio de sabores y presentaciones innovadoras.',
    duration: '4 meses',
    students: '1,200+',
    level: 'Avanzado',
    color: 'bg-blue-950',
  },
  {
    id: 4,
    title: 'Coctelería Molecular',
    description: 'Experimenta con espumas, geles y esferificaciones usando técnicas científicas aplicadas a la mixología moderna.',
    duration: '3 meses',
    students: '3,100+',
    level: 'Principiante',
    color: 'bg-blue-950',
  },
  {
    id: 5,
    title: 'Mixología de Café y Té',
    description: 'Mezcla café, té e infusiones con coctelería moderna para crear bebidas frías y calientes únicas.',
    duration: '3 meses',
    students: '1,600+',
    level: 'Brochure',
    color: 'from-orange-500 to-amber-500',
  },
];
const Cursos =()=> {

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-medium">
            <span>Catálogo de Cursos</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforma tu{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-700">
              futuro profesional
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Aprende con expertos de la industria y desarrolla habilidades que te abrirán puertas en el mercado laboral
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, id) => 
            <CardCursos key={id} {...course} />)
          }
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-blue-950 to-primary rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿No encuentras el curso que buscas?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos y cuéntanos qué te gustaría aprender. Constantemente estamos añadiendo nuevos cursos.
          </p>
          <button
            onClick={() => alert('Formulario de contacto próximamente')}
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white"
          >
            Solicitar Nuevo Curso
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cursos;