import { v4 as uuidv4 } from 'uuid';

export const EstudianteP = {
    id_estudiante: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    sexo: '',
    cedula: '',
    telefono: '',
    email: '',
    fecha_creacion: '',
    fecha_modificacion: ''

}

export function Estudiante(nombres, apellidos, direccion, sexo, cedula, telefono, email){
    this.id_estudiante = uuidv4();
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.sexo = sexo;
    this.cedula = cedula;
    this.telefono = telefono;
    this.email = email;
    this.fecha_creacion = new Date().toLocaleString("en-US", { timeZone: "UTC" });
    this.fecha_modificacion = new Date().toLocaleString("en-US", { timeZone: "UTC" });
}
