import { Container, Box, Typography, Avatar, Grid, Chip, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import perfilfoto from './imagenes/perfilfoto2.jpg';
import './App.css';

const datosPersonales = {
  nombre: 'Damaris Anahí Salcedo',
  profesion: 'Estudiante de Ingeniería en Software | Asesora de ventas',
  email: 'damaris.salcedo@uisek.edu.ec',
  telefono: '0968989623',
  ubicacion: 'AV La Bota, Sector Comité del Pueblo',
  edad: 23,
  foto: perfilfoto
};

const perfil = 'Asesora de ventas responsable, con buena comunicación y muchas ganas de aprender y crecer profesionalmente en el sector tecnológico y financiero.';

const habilidadesBlandas = [
  'Organización y responsabilidad en tareas administrativas',
  'Comunicación efectiva y trabajo en equipo',
  'Motivación por el aprendizaje y desarrollo continuo',
  'Buena resolución de problemas',
  'Atención al cliente'
];

const habilidadesProfesionales = [
  'Conocimientos en redes y computación en la nube (Cisco, AWS)',
  'Manejo de redes sociales',
  'Servicio de caja',
  'Gestión administrativa',
  'Desarrollo de software (en formación)'
];

const cursos = [
  { nombre: 'Cisco Networking Academy en Skill', periodo: '2024 - Finalizado' },
  { nombre: 'AWS Cloud Practitioner', periodo: '2024 - Finalizado' }
];

const proyectos = [
  { nombre: 'Software en la Universidad FINANMOTORS S.A.', descripcion: 'Desarrollo y soporte de software en entorno universitario y empresarial (2020).' },
  { nombre: 'Interno en SEK', descripcion: 'Prácticas en redes y servicios en la nube, certificaciones Cisco y AWS.' },
  { nombre: 'Atención al cliente y redes sociales', descripcion: 'Gestión de atención al cliente y manejo de redes sociales en sector financiero.' }
];

const lenguajes = ['Español (Nativo)', 'Inglés (Básico)'];

const experiencia = [
  { puesto: 'Software en la Universidad', empresa: 'FINANMOTORS S.A.', periodo: '2020', descripcion: 'Desarrollo y soporte de software.' },
  { puesto: 'Interno', empresa: 'SEK', periodo: '2023', descripcion: 'Prácticas en redes y servicios en la nube.' },
  { puesto: 'Asesora de ventas', empresa: 'Sector financiero', periodo: '2021 - Actualidad', descripcion: 'Atención al cliente, manejo de redes sociales, servicio de caja.' }
];

const educacion = [
  { institucion: 'UNIVERSIDAD INTERNACIONAL SEK', titulo: 'Ingeniería en Software', periodo: '2023 - en curso' },
  { institucion: 'COLEGIO REPLICA MEJÍA MOREIRA', titulo: 'Bachillerato en Ciencias', periodo: '2019 - Finalizado' }
];

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar src={datosPersonales.foto} alt={datosPersonales.nombre} sx={{ width: 100, height: 100, mr: 3, boxShadow: 3, border: '3px solid #f7cac9' }} />
        <Box>
          <Typography variant="h4" fontWeight="bold" color="#b993d6">{datosPersonales.nombre}</Typography>
          <Typography variant="h6" color="#f7cac9">{datosPersonales.profesion}</Typography>
          <Typography color="#92a8d1">{datosPersonales.email} | {datosPersonales.telefono}</Typography>
          <Typography color="#f7cac9">{datosPersonales.ubicacion} | Edad: {datosPersonales.edad}</Typography>
        </Box>
      </Box>

      <Card sx={{ mb: 3, background: '#f7cac9', color: '#222', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom color="#b993d6">Perfil</Typography>
          <Typography color="#222">{perfil}</Typography>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ background: '#b993d6', color: '#fff', boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="#f7cac9">Habilidades Blandas</Typography>
              {habilidadesBlandas.map(hab => (
                <Chip key={hab} label={hab} sx={{ mr: 1, mb: 1, background: '#f7cac9', color: '#222' }} />
              ))}
              <Typography variant="h6" gutterBottom mt={2} color="#f7cac9">Habilidades Profesionales</Typography>
              {habilidadesProfesionales.map(hab => (
                <Chip key={hab} label={hab} sx={{ mr: 1, mb: 1, background: '#92a8d1', color: '#222' }} />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ background: '#f7cac9', color: '#222', boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="#b993d6">Idiomas</Typography>
              {lenguajes.map(lang => (
                <Chip key={lang} label={lang} sx={{ mr: 1, mb: 1, background: '#b993d6', color: '#fff' }} />
              ))}
              <Typography variant="h6" gutterBottom mt={2} color="#b993d6">Cursos Completados</Typography>
              <List>
                {cursos.map(curso => (
                  <ListItem key={curso.nombre}>
                    <ListItemText primary={curso.nombre} secondary={curso.periodo} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ background: '#b993d6', color: '#fff', boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="#f7cac9">Proyectos Destacados</Typography>
              <List>
                {proyectos.map(proj => (
                  <ListItem key={proj.nombre} alignItems="flex-start">
                    <ListItemText primary={proj.nombre} secondary={proj.descripcion} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ background: '#f7cac9', color: '#222', boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="#b993d6">Experiencia Profesional</Typography>
              <List>
                {experiencia.map(exp => (
                  <ListItem key={exp.puesto} alignItems="flex-start">
                    <ListItemText primary={`${exp.puesto} - ${exp.empresa} (${exp.periodo})`} secondary={exp.descripcion} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ background: '#b993d6', color: '#fff', boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="#f7cac9">Educación</Typography>
              <List>
                {educacion.map(edu => (
                  <ListItem key={edu.institucion} alignItems="flex-start">
                    <ListItemText primary={`${edu.titulo} - ${edu.institucion}`} secondary={edu.periodo} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
