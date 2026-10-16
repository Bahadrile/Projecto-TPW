const baseDatosMotos = {
    "full-chamba": [
        {nombre: "TVS Sport 100", motor: "99.2 cc 4 tiempos", frenos: "Tambor delantero y trasero", suspension: "Telescópica hidráulica", rendimiento: "220 km/galón", transmision: "4 velocidades", precio: "S/ 4,599"},
        {nombre: "Bajaj Boxer 150", motor: "144.8 cc monocilíndrico", frenos: "Tambor CBS", suspension: "Doble amortiguador SNS", rendimiento: "180 km/galón", transmision: "5 velocidades", precio: "S/ 5,299"},
        {nombre: "Honda CB125F", motor: "124 cc refrigerado por aire", frenos: "Disco del / Tambor tras", suspension: "Horquilla telescópica", rendimiento: "200 km/galón", transmision: "5 velocidades", precio: "S/ 6,100"},
        {nombre: "Hero Eco 150", motor: "149.2 cc OHC", frenos: "Tambor alto rendimiento", suspension: "Doble amortiguador", rendimiento: "175 km/galón", transmision: "5 velocidades", precio: "S/ 4,899"},
        {nombre: "Wanxin Work 125", motor: "125 cc de carga", frenos: "Tambor reforzado", suspension: "Eje de carga pesada", rendimiento: "160 km/galón", transmision: "4 velocidades", precio: "S/ 3,999"},
        {nombre: "Suzuki AX4", motor: "113 cc 4 tiempos", frenos: "Tambor mecánico", suspension: "Convencional suave", rendimiento: "150 km/galón", transmision: "4 velocidades", precio: "S/ 4,200"}
    ],
    "callejero": [
        {nombre: "Yamaha FZ-S Fi V3", motor: "149 cc Blue Core", frenos: "Disco lobulado con ABS", suspension: "Horquilla de 41mm", rendimiento: "140 km/galón", transmision: "5 velocidades", precio: "S/ 9,499"},
        {nombre: "Pulsar NS 160", motor: "160.3 cc DTS-i 4V", frenos: "Doble disco ABS", suspension: "Monoshock central", rendimiento: "135 km/galón", transmision: "5 velocidades", precio: "S/ 8,299"},
        {nombre: "Honda CB 190R", motor: "184.4 cc PGM-FI", frenos: "Discos lobulados del/tras", suspension: "Horquilla invertida", rendimiento: "130 km/galón", transmision: "5 velocidades", precio: "S/ 10,500"},
        {nombre: "CFMOTO 150NK", motor: "149.4 cc líquido", frenos: "J.Juan hidráulicos ABS", suspension: "Invertida delantera", rendimiento: "125 km/galón", transmision: "6 velocidades", precio: "S/ 9,990"},
        {nombre: "KTM Duke 200", motor: "199.5 cc inyección", frenos: "ByBre con ABS", suspension: "WP Apex Invertida", rendimiento: "120 km/galón", transmision: "6 velocidades", precio: "S/ 14,500"},
        {nombre: "Suzuki Gixxer 150", motor: "155 cc SEP", frenos: "Disco en ambas ruedas", suspension: "Telescópica hidráulica", rendimiento: "145 km/galón", transmision: "5 velocidades", precio: "S/ 8,990"}
    ],
    "ejecutivo": [
        {nombre: "Vespa Primavera 125", motor: "124 cc iGet", frenos: "Disco con ABS", suspension: "Monobrazo muelle helicoidal", rendimiento: "130 km/galón", transmision: "Automática CVT", precio: "S/ 16,500"},
        {nombre: "Honda Elite 125", motor: "124.9 cc PGM-FI", frenos: "CBS Combinado", suspension: "Horquilla telescópica", rendimiento: "150 km/galón", transmision: "Automática V-Matic", precio: "S/ 8,400"},
        {nombre: "Yamaha RayZR 125", motor: "125 cc Hybrid", frenos: "Unificado UBS", suspension: "Telescópica", rendimiento: "160 km/galón", transmision: "Automática CVT", precio: "S/ 7,990"},
        {nombre: "Keeway Cityblade 150", motor: "150 cc refrigerado aire", frenos: "Disco lobulado CBS", suspension: "Doble amortiguador", rendimiento: "125 km/galón", transmision: "Automática CVT", precio: "S/ 6,800"},
        {nombre: "Suzuki Burgman Street", motor: "124 cc fuel injection", frenos: "Disco delantero CBS", suspension: "Delantera telescópica", rendimiento: "145 km/galón", transmision: "Automática", precio: "S/ 8,999"},
        {nombre: "Hero Dash 125", motor: "124.6 cc i3s", frenos: "Tambor y disco", suspension: "Brazo basculante", rendimiento: "140 km/galón", transmision: "Automática", precio: "S/ 6,500"}
    ],
    "aventurero": [
        {nombre: "Outland 1250 X", motor: "1250 cc bicilíndrico V", frenos: "Brembo ABS Doble Canal", suspension: "Electrónica semi-activa", rendimiento: "65 km/galón", transmision: "6 velocidades", precio: "S/ 45,500"},
        {nombre: "Royal Enfield Himalayan 450", motor: "452 cc Sherpa líquido", frenos: "Disco ABS desconectable", suspension: "Invertida Showa 43mm", rendimiento: "95 km/galón", transmision: "6 velocidades", precio: "S/ 24,500"},
        {nombre: "Honda CB500X", motor: "471 cc bicilíndrico", frenos: "Doble disco ABS", suspension: "Invertida Showa SFF-BP", rendimiento: "85 km/galón", transmision: "6 velocidades", precio: "S/ 31,900"},
        {nombre: "KTM 390 Adventure", motor: "373.2 cc monocilíndrico", frenos: "ByBre con ABS Off-Road", suspension: "WP APEX ajustable", rendimiento: "90 km/galón", transmision: "6 velocidades", precio: "S/ 28,500"},
        {nombre: "Suzuki V-Strom 250 SX", motor: "249 cc SOCS", frenos: "Disco lobulado con ABS", suspension: "Telescópica largo recorrido", rendimiento: "110 km/galón", transmision: "6 velocidades", precio: "S/ 18,900"},
        {nombre: "CFMOTO 450MT", motor: "449 cc bicilíndrico", frenos: "J.Juan con ABS Bosch", suspension: "KYB ajustables", rendimiento: "88 km/galón", transmision: "6 velocidades", precio: "S/ 26,900"}
    ],
    "deluxe": [
        {nombre: "Royal Enfield Classic 350", motor: "349 cc J-series", frenos: "Doble canal ABS", suspension: "Horquilla convencional", rendimiento: "95 km/galón", transmision: "5 velocidades", precio: "S/ 21,500"},
        {nombre: "Honda Rebel 300", motor: "286 cc DOHC", frenos: "Disco hidráulico ABS", suspension: "Doble amortiguador", rendimiento: "100 km/galón", transmision: "6 velocidades", precio: "S/ 22,900"},
        {nombre: "Benelli Imperiale 400", motor: "374 cc monocilíndrico", frenos: "Disco con ABS", suspension: "Telescópica clásica", rendimiento: "90 km/galón", transmision: "5 velocidades", precio: "S/ 19,500"},
        {nombre: "Kawasaki Eliminator 500", motor: "451 cc bicilíndrico", frenos: "ABS avanzado", suspension: "Confort de ruta", rendimiento: "85 km/galón", transmision: "6 velocidades", precio: "S/ 29,500"},
        {nombre: "Keeway V-Cruise 125", motor: "125 cc V-twin", frenos: "CBS frenada combinada", suspension: "Horquilla invertida", rendimiento: "110 km/galón", transmision: "5 velocidades", precio: "S/ 13,900"},
        {nombre: "Zontes 350G", motor: "348 cc alta gama", frenos: "J.Juan con ABS", suspension: "Ajustable electrónica", rendimiento: "95 km/galón", transmision: "6 velocidades", precio: "S/ 23,500"}
    ],
    "deportivo": [
        {nombre: "Vulcan 1100 R", motor: "1100 cc Superbike", frenos: "Brembo M50 radial ABS", suspension: "Öhlins presurizada", rendimiento: "55 km/galón", transmision: "6 velocidades Quickshifter", precio: "S/ 29,990"},
        {nombre: "APEX 890 RS", motor: "889 cc Hypernaked", frenos: "Doble disco flotante ABS", suspension: "WP Apex competición", rendimiento: "70 km/galón", transmision: "6 velocidades", precio: "S/ 42,150"},
        {nombre: "Yamaha R3", motor: "321 cc bicilíndrico", frenos: "Disco hidráulico ABS", suspension: "Horquilla invertida", rendimiento: "85 km/galón", transmision: "6 velocidades", precio: "S/ 25,990"},
        {nombre: "Kawasaki Ninja 400", motor: "399 cc 4 tiempos", frenos: "Disco lobulado 310mm", suspension: "Telescópica 41mm", rendimiento: "80 km/galón", transmision: "6 velocidades", precio: "S/ 27,500"},
        {nombre: "KTM RC 390", motor: "373.2 cc ultra deportivo", frenos: "ByBre Supermoto ABS", suspension: "WP APEX abierta", rendimiento: "82 km/galón", transmision: "6 velocidades antirrebote", precio: "S/ 26,500"},
        {nombre: "Honda CBR 500R", motor: "471 cc bicilíndrico", frenos: "Doble disco delantero ABS", suspension: "Showa SFF-BP invertida", rendimiento: "78 km/galón", transmision: "6 velocidades", precio: "S/ 32,500"}
    ]
};

function filtrarEstilo(estiloKey) {
    const contenedorGrid = document.getElementById("grid-motos-resultado");
    const tituloCategoria = document.getElementById("titulo-categoria-seleccionada");
    const listaMotos = baseDatosMotos[estiloKey] || [];
    
    tituloCategoria.innerText = `MODELOS ENCONTRADOS PARA: ${estiloKey.replace('-',' ').toUpperCase()}`;
    contenedorGrid.innerHTML = "";

    listaMotos.forEach(moto => {
        const card = document.createElement("article");
        card.className = "card-producto";
        card.innerHTML = `
            <div class="card-img" style="background: linear-gradient(135deg, #1f242d, #111318);"></div>
            <div class="card-body">
                <span class="categoria">${estiloKey.toUpperCase()}</span>
                <h3>${moto.nombre}</h3>
                <div class="specs">
                    <div><small>MOTOR</small><br><strong>${moto.motor}</strong></div>
                </div>
                <div class="card-footer">
                    <div><small>Precio desde</small><br><strong>${moto.precio}</strong></div>
                    <button class="btn-icon" onclick='abrirModal(${JSON.stringify(moto)}, "${estiloKey}")'>Ver Detalle &rarr;</button>
                </div>
            </div>
        `;
        contenedorGrid.appendChild(card);
    });

    document.getElementById("catalogo-motos").scrollIntoView({ behavior: 'smooth' });
}

function abrirModal(moto, estilo) {
    document.getElementById("modal-titulo").innerText = moto.nombre;
    document.getElementById("modal-estilo").innerText = estilo.toUpperCase();
    document.getElementById("modal-motor").innerText = moto.motor;
    document.getElementById("modal-frenos").innerText = moto.frenos;
    document.getElementById("modal-suspension").innerText = moto.suspension;
    document.getElementById("modal-rendimiento").innerText = moto.rendimiento;
    document.getElementById("modal-transmision").innerText = moto.transmision;
    document.getElementById("modal-precio").innerText = moto.precio;

    document.getElementById("modal-detalle").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal-detalle").style.display = "none";
}