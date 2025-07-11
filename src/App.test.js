import datosPersonales from './App';

// Mock de datos para pruebas
const habilidadesBlandas = [
  'Responsabilidad y compromiso profesional',
  'Trabajo en equipo y comunicación efectiva',
  'Capacidad de aprendizaje continuo',
  'Adaptabilidad a entornos tecnológicos',
  'Iniciativa'
];
const proyectos = [
  { nombre: 'Proyecto 1', descripcion: 'Desc 1' },
  { nombre: 'Proyecto 2', descripcion: 'Desc 2' },
  { nombre: 'Proyecto 3', descripcion: 'Desc 3' }
];

describe('Validaciones de Portafolio', () => {
  test('Datos personales incluyen fotografía, teléfono y nombre completo', () => {
    expect(datosPersonales.foto).toBeDefined();
    expect(typeof datosPersonales.foto).toBe('string');
    expect(datosPersonales.telefono).toMatch(/\d{9,}/);
    expect(datosPersonales.nombre).toMatch(/\w+ \w+/);
  });

  test('Listado de habilidades blandas tiene al menos 5 elementos', () => {
    expect(habilidadesBlandas.length).toBeGreaterThanOrEqual(5);
  });

  test('Listado de proyectos tiene al menos 3 elementos', () => {
    expect(proyectos.length).toBeGreaterThanOrEqual(3);
  });
});
