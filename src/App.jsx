import { Container, Box, Typography, Avatar, Grid, Chip, Card, CardContent, List, ListItem, ListItemText } from '@mui/material'
import './App.css'
import perfilfoto from './imagenes/perfilfoto.jpg'

const datosPersonales = {
  nombre: 'Michael Jhonatan Ayol Guaman',
  profesion: 'Técnico en Seguridad y Automatización | Estudiante de Ingeniería en Software',
  email: 'Michael.ayol@uisek.edu.ec',
  telefono: '0989653595',
  ubicacion: 'AV La Bota, sector Portal Shopping',
  edad: 25,
  foto: perfilfoto // Importación correcta de la foto de perfil
}

const perfil = 'Persona comprometida, con formación técnica y académica en desarrollo, capaz de adaptarse a entornos diversos.'

const habilidadesBlandas = [
  'Responsabilidad y compromiso profesional',
  'Trabajo en equipo y comunicación efectiva',
  'Capacidad de aprendizaje continuo',
  'Adaptabilidad a entornos tecnológicos',
  'Iniciativa'
]
const habilidadesProfesionales = [
  'Conocimientos en redes y computación en la nube',
  'Experiencia en instalación y mantenimiento de sistemas tecnológicos',
  'Instalación de cámaras, módulos WiFi, motores automáticos',
  'Mantenimiento de dispositivos industriales',
  'Desarrollo de software (en formación)'
]
const cursos = [
  { nombre: 'Cisco Networking Academy en Skill', periodo: '2024 - finalizado' },
  { nombre: 'AWS Cloud Practitioner', periodo: '2024 - finalizado' }
]
const proyectos = [
  { nombre: 'Instalación y mantenimiento de dispositivos de seguridad y automatización', descripcion: 'Instalación de cámaras, módulos WiFi, motores automáticos controlados con aplicación y mantenimiento en empresas industriales (2018-2024).' }
]
const lenguajes = ['Español (Nativo)', 'Inglés (B2)']
const experiencia = [
  { puesto: 'Técnico en Seguridad y Automatización', empresa: 'GRUPO GUAMAN', periodo: '2018 - 2024', descripcion: 'Instalación y mantenimiento de dispositivos de seguridad y automatización. Experiencia práctica en tecnología, software, redes y computación en la nube.' }
]
const educacion = [
  { institucion: 'UNIVERSIDAD INTERNACIONAL SEK', titulo: 'Ingeniería en Software', periodo: '2023 - en curso' },
  { institucion: 'COLEGIO RICARDO CORNEJO ROSALES', titulo: 'Bachillerato en Ciencias', periodo: '2017 - finalizado' },
  { institucion: 'CEC Politécnica', titulo: 'Academia de idiomas', periodo: '2017 - finalizado' }
]

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar src={datosPersonales.foto} alt={datosPersonales.nombre} sx={{ width: 100, height: 100, mr: 3 }} />
        <Box>
          <Typography variant="h4" fontWeight="bold">{datosPersonales.nombre}</Typography>
          <Typography variant="h6" color="text.secondary">{datosPersonales.profesion}</Typography>
          <Typography>{datosPersonales.email} | {datosPersonales.telefono}</Typography>
          <Typography>{datosPersonales.ubicacion} | Edad: {datosPersonales.edad}</Typography>
        </Box>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Perfil</Typography>
          <Typography>{perfil}</Typography>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Habilidades Blandas</Typography>
              {habilidadesBlandas.map(hab => <Chip key={hab} label={hab} sx={{ mr: 1, mb: 1 }} />)}
              <Typography variant="h6" gutterBottom mt={2}>Habilidades Profesionales</Typography>
              {habilidadesProfesionales.map(hab => <Chip color="primary" key={hab} label={hab} sx={{ mr: 1, mb: 1 }} />)}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Idiomas</Typography>
              {lenguajes.map(lang => <Chip color="secondary" key={lang} label={lang} sx={{ mr: 1, mb: 1 }} />)}
              <Typography variant="h6" gutterBottom mt={2}>Cursos Completados</Typography>
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
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Proyectos Destacados</Typography>
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
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Experiencia Profesional</Typography>
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
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Educación</Typography>
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
  )
}

export default App
