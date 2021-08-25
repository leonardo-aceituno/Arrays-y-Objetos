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


let area = depto => { 
    let plantilla = `
        <div id='area-01' class='fs-4  text-center bg-info py-2 text-light fw-bold'>${depto}</div>` 
    return plantilla
}

let primeraUltima = array => {
    let plantilla = `
    <div class='my-1 d-flex justify-content-between border border-info p-2'>
        <div> <b> * Primera atencion:</b> ${array[0].paciente} - ${array[0].prevision} </div>
        <div> <b> * Última atencion:</b> ${array[array.length -1].paciente} - ${array[array.length -1].prevision} </div>
    </div>`
    return plantilla
}    


let printTabla = (array,depto) => {
    let j = 1
    let plantilla = `<section class='container mt-5' id='${depto}'>` 
                  + area(depto) 
                  + primeraUltima(array)
                  + `<table class="table table-hover table-bordered border-info table-sm table-striped">
                  <thead class="">
                      <tr class='text-center'>
                          <th scope="col" >#</th>
                          <th scope="col">Hora</th>
                          <th scope="col">Especialista</th>
                          <th scope="col">Paciente</th>
                          <th scope="col">Rut</th>
                          <th scope="col">Prevision</th>
                      </tr>
                  </thead>
                  <tbody>
                  `    
    
    for(let i in array) {
        plantilla += `
            <tr class='text-center'>
                <th scope="row"> ${j}</th>
                <td> ${array[i].hora} </td>
                <td> ${array[i].especialista}</td>
                <td> ${array[i].paciente}</td>
                <td> ${array[i].rut}</td>
                <td> ${array[i].prevision}</td>
            </tr>`
        j++
    }
    plantilla += `</tbody></table></section>`
    document.write(plantilla)
}



// MAIN
document.write('<div class="text-center my-3 fs-1 fw-bold">ESTADISTICAS CENTRO MÉDICO ÑUÑOA</div>')
printTabla(dental,"DENTAL");
printTabla(traumatologia,"TRAUMATOLOGIA");
printTabla(radiologia,"RADIOLOGIA");