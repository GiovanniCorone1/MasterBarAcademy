type CardCursosProps = {
  id: number;
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  color: string;
}

export const CardCursos = ({id, title, description, duration, students, level, color}: CardCursosProps) => {
    const handleEnroll = (courseTitle: string) => {
    alert(`¡Pronto te contactaremos sobre: ${courseTitle}!`);
  };
  return (
    <div
        key={id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${color}`} />

                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-850 transition-colors">
                    {title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                  </p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{students}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {level}
                    </span>
                  </div>

                  <button
                    onClick={() => handleEnroll(title)}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${color} hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300`}
                  >
                    Inscribirse Ahora
                  </button>
                </div>
    </div>
  )
}

