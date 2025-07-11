import perfilfoto from './imagenes/perfilfoto2.jpg';
import { datosPersonales, habilidadesBlandas, proyectos } from './App';

describe('Validaciones de Portafolio Femenino', () => {
  test('Datos personales incluyen fotografía, teléfono y nombre completo', () => {
    expect(datosPersonales.foto).toBe(perfilfoto);
    expect(typeof datosPersonales.telefono).toBe('string');
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
