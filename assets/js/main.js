let dental = [
    {   hora: '08:30', especialista: 'Andrea Zuñiga',       paciente: 'Marcela Retamal',    rut: '11123425-6',  prevision:'Isapre'   },
    {   hora: '11:00', especialista: 'Maria Pia Zañartu',   paciente: 'Angel Muñoz',        rut: '9878789-2',   prevision:'Isapre'   },
    {   hora: '11:30', especialista: 'Scarlett Witting',    paciente: 'Mario Kast',         rut: '7998789-5',   prevision: 'Fonasa'   },
    {   hora: '13:00', especialista: 'Francisco Von Teuber',paciente: 'Karin Fernandez',    rut: '18887662-K',  prevision: 'Fonasa'   },
    {   hora: '13:30', especialista: 'Eduardo Viñuela',     paciente: 'Hugo Sanchez',       rut: '17665461-4',  prevision: 'Fonasa'   },
    {   hora: '14:00', especialista: 'Raquel Villaseca',    paciente: 'Ana Sepulveda',      rut: '14441281-0',  prevision:'Isapre'   },
    
]

let traumatologia = [
    {   hora: '08:00', especialista: 'Maria Paz Altuzarra',   paciente: 'Paula Sanchez',    rut: '15554774-5',  prevision: 'Fonasa'   },
    {   hora: '10:00', especialista: 'Raul Araya',            paciente: 'Angélica Navas',   rut: '15444147-9',  prevision:'Isapre'   },
    {   hora: '10:30', especialista: 'Maria Arriagada',       paciente: 'Ana Klapp',        rut: '17879423-9',  prevision:'Isapre'   },
    {   hora: '11:00', especialista: 'Alejandro Badilla',     paciente: 'Felipe Mardones',  rut: '1547423-6',   prevision:'Isapre'   },
    {   hora: '11:30', especialista: 'Cecilia Budnik',        paciente: 'Diego Marre',      rut: '16554741-K',  prevision: 'Fonasa'   },
    {   hora: '12:00', especialista: 'Arturo Cavagnaro',      paciente: 'Cecilia Mendez',   rut: '9747535-8',   prevision:'Isapre'   },
    {   hora: '12:30', especialista: 'Andres Kanacri',        paciente: 'Marcial Suazo',    rut: '11254785-5',  prevision:'Isapre'   },
]

let radiologia = [
    {   hora: '11:00', especialista: 'Ignacio Schulz',          paciente: 'Francisca Rojas',    rut: '9878782-1',   prevision: 'Fonasa'   },
    {   hora: '11:30', especialista: 'Federico Subercaseaux',   paciente: 'Pamela Estrada',     rut: '15345241-3',  prevision:'Isapre'   },
    {   hora: '15:00', especialista: 'Fernando Wurthz',         paciente: 'Armando Luna',       rut: '16445345-9',  prevision:'Isapre'   },
    {   hora: '15:30', especialista: 'Ana Maria Godoy',         paciente: 'Manuel Godoy',       rut: '17666419-0',  prevision: 'Fonasa'   },
    {   hora: '16:00', especialista: 'Patricia SuazoO',         paciente: 'Ramon Ulloa',        rut: '14989389-K',  prevision: 'Fonasa'   },
]


const imprime = (primera,ultima) => {
    let texto = `  <b> * Primera atencion:</b> ${primera.paciente} - ${primera.prevision}  |  <b> * Última atencion:</b> ${ultima.paciente} - ${ultima.prevision}`;
    return texto;
}

const buscar = array => {
    let primera;
    let ultima;
    for(let i in array){
        if(i == 0){ 
            primera = array[i]; 
        }
        if(i == (array.length - 1)){ 
            ultima = array[i]; 
        }        
    }

    let texto = imprime(primera,ultima);
    return texto;

}

const printTabla = array => {
    let texto = `
    <thead class="table-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Hora</th>
            <th scope="col">Especialista</th>
            <th scope="col">Paciente</th>
            <th scope="col">Rut</th>
            <th scope="col">Prevision</th>
        </tr>
    </thead>
    <tbody>`
            
    let j = 0;
    for(let i in array) {
        j++
        texto += `
            <tr>
                <th scope="row"> ${j}</th>
                <td> ${array[i].hora} </td>
                <td> ${array[i].especialista}</td>
                <td> ${array[i].paciente}</td>
                <td> ${array[i].rut}</td>
                <td> ${array[i].prevision}</td>
            </tr>`
    }
    texto += `</tbody>`
    return texto
}



// MAIN
document.querySelector('#titulo').innerHTML = `<p> ESTADISTICAS CENTRO MÉDICO ÑUÑOA </p>`

// Dental
document.querySelector('#area-01').innerHTML = `<p> DENTAL </p>`
document.querySelector('#info-01').innerHTML = buscar(dental);
document.querySelector("#cuerpo-tabla-01").innerHTML=  printTabla(dental);

// Traumatologia
document.querySelector('#area-02').innerHTML = `<p> TRAUMATOLOGíA </p>`
document.querySelector('#info-02').innerHTML = buscar(traumatologia);
document.querySelector("#cuerpo-tabla-02").innerHTML=  printTabla(traumatologia);

// Radiologia
document.querySelector('#area-03').innerHTML = `<p> RADIOLOGÍA </p>`
document.querySelector('#info-03').innerHTML = buscar(traumatologia);
document.querySelector("#cuerpo-tabla-03").innerHTML=  printTabla(traumatologia);









