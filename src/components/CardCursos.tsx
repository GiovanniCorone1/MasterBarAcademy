import {AcademicCapIcon, ArrowDownTrayIcon, ClockIcon, UserIcon} from '@heroicons/react/24/outline';
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
  const phoneNumber = "51924985429";
  const message = `Hola! Quisiera obtener más información sobre el curso: ${title}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div
        key={id}
                className="group bg-white rounded-2xl shadow-lg  transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
                <div className={`h-2 bg-gradient-to-r ${color}`} />
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <AcademicCapIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-850 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div>
                      <span className='flex flex-row gap-1.5'><ClockIcon className="size-5"/> {duration}</span>
                    </div>
                    <div>
                      <span className='flex flex-row gap-1.5'><UserIcon className="size-5"/> {students}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-6 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium gap-2 w-fit cursor-pointer">
                    <ArrowDownTrayIcon className="size-6 text-gray-600" />
                    Brochure
                  </div>
                  <a
                   href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full py-3 px-6 rounded-xl font-semibold text-white 
                    bg-gradient-to-r ${color} transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:scale-105`}>
                    Solicita Información
                  </a>
                </div>
    </div>
  )
}

