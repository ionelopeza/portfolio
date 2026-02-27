// ================================================
//  SCRIPT.JS — Lóxica interactiva do CV
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    inicializarModoOscuro();
    cargarCV();
});

function cargarCV() {
    const { nombre, titulo, ubicacion } = cvData.personal;
    document.getElementById('nombre').textContent    = nombre;
    document.getElementById('titulo').textContent    = titulo;
    document.getElementById('ubicacion').textContent = '📍 ' + ubicacion;
    document.getElementById('footerNombre').textContent =
        `© ${new Date().getFullYear()} ${nombre}`;

    if (cvData.personal.sobre) {
        document.getElementById('sobreTexto').textContent = cvData.personal.sobre;
    }
    renderExperiencia();
    renderEducacion();
    renderHabilidades();
    renderIdiomas();
    renderCertificaciones();
    renderContacto();
}

function renderExperiencia(filtro = '') {
    const lista = document.getElementById('experienciaList');
    const datos = cvData.experiencia.filter(exp =>
        `${exp.empresa} ${exp.puesto} ${exp.descripcion}`
            .toLowerCase().includes(filtro.toLowerCase())
    );
    if (datos.length === 0) {
        lista.innerHTML = '<p class="sin-resultados">Non se atoparon resultados.</p>';
        return;
    }
    lista.innerHTML = datos.map(exp => `
        <div class="item">
            <h3>${exp.puesto}</h3>
            <p class="item-meta">${exp.empresa}</p>
            <span class="item-fecha">${exp.fechaInicio} – ${exp.fechaFin}</span>
            <p class="item-descripcion">${exp.descripcion}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const inputExp = document.getElementById('filtroExperiencia');
    if (inputExp) inputExp.addEventListener('input', e => renderExperiencia(e.target.value));
    const inputSkills = document.getElementById('filtroHabilidades');
    if (inputSkills) inputSkills.addEventListener('input', e => renderHabilidades(e.target.value));
});

function renderEducacion() {
    const lista = document.getElementById('educacionList');
    lista.innerHTML = cvData.educacion.map(edu => `
        <div class="item">
            <h3>${edu.titulo}</h3>
            <p class="item-meta">${edu.institucion}</p>
            <span class="item-fecha">${edu.fecha}</span>
            ${edu.descripcion ? `<p class="item-descripcion">${edu.descripcion}</p>` : ''}
        </div>
    `).join('');
}

function renderHabilidades(filtro = '') {
    const contenedor = document.getElementById('habilidadesList');
    const termino = filtro.toLowerCase();
    let html = '';
    cvData.habilidades.forEach(grupo => {
        const skillsFiltradas = grupo.skills.filter(s => s.toLowerCase().includes(termino));
        if (skillsFiltradas.length === 0) return;
        html += `
            <div class="skill-category">
                <p class="skill-category-title">${grupo.categoria}</p>
                <div class="skills-tags">
                    ${skillsFiltradas.map(s => `<span class="skill-tag">${s}</span>`).join('')}
                </div>
            </div>
        `;
    });
    contenedor.innerHTML = html || '<p class="sin-resultados">Non se atoparon habilidades.</p>';
}

function renderIdiomas() {
    const lista = document.getElementById('idiomasList');
    lista.innerHTML = cvData.idiomas.map(({ idioma, nivel, porcentaje }) => `
        <div class="item">
            <h3>${idioma}</h3>
            <p class="item-meta">${nivel}</p>
            <div class="nivel-bar">
                <div class="nivel-fill" style="width: ${porcentaje}%"></div>
            </div>
        </div>
    `).join('');
}

function renderCertificaciones() {
    const lista = document.getElementById('certificacionesList');
    lista.innerHTML = cvData.certificaciones.map(cert => `
        <div class="item">
            <h3>${cert.nombre}</h3>
            <p class="item-meta">${cert.emisor}</p>
            <span class="item-fecha">${cert.fecha}</span>
            ${cert.url ? `<p class="item-descripcion"><a href="${cert.url}" target="_blank">Ver certificado →</a></p>` : ''}
        </div>
    `).join('');
}

function renderContacto() {
    const lista = document.getElementById('contactoList');
    lista.innerHTML = cvData.personal.enlaces.map(enlace => `
        <a href="${enlace.url}" class="contacto-link" target="_blank" rel="noopener noreferrer">
            <span>${enlace.icono}</span>
            <span>${enlace.tipo}</span>
        </a>
    `).join('');
}

function inicializarModoOscuro() {
    const btn  = document.getElementById('darkModeBtn');
    const pref = localStorage.getItem('darkMode');
    if (pref === 'true') {
        document.body.classList.add('dark-mode');
        btn.textContent = '☀️';
    }
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        btn.textContent = isDark ? '☀️' : '🌙';
    });
}
