import { consumirExcelDrive } from "./consumirExcelDrive.js";

const ID_EXCEL = "1hIbYiPBBu3Vha-_H57x1lLA39nAal08oyrGWNwz4XsE";

document.addEventListener("DOMContentLoaded", async () => {
    const infoExcel = await consumirExcelDrive(ID_EXCEL);

    const contenedor = document.querySelector(".productos");

    infoExcel.forEach((producto) => {
        contenedor.innerHTML += `
            <div class="card m-3" style="width: 18rem;">
                <img 
                    src="${producto["imagen url"]}" 
                    class="card-img-top"
                    alt="${producto["nombre del producto"]}"
                >

                <div class="card-body">
                    <h5 class="card-title">
                        ${producto["nombre del producto"]}
                    </h5>

                    <p class="card-text">
                        Precio: ${producto.precio}
                    </p>

                    <p class="card-text">
                        Oferta: ${producto.oferta}
                    </p>

                    <p class="card-text">
                        Vence: ${new Date(producto.vencimiento).toLocaleDateString()}
                    </p>

                    <div class="d-flex gap-2">
                        <button
                            class="btn btn-success comprar"
                            data-nombre="${producto["nombre del producto"]}"
                            data-precio="${producto.precio}">
                            Comprar
                        </button>

                        <button
                            class="btn btn-outline-secondary detalle"
                            data-nombre="${producto["nombre del producto"]}"
                            data-precio="${producto.precio}"
                            data-oferta="${producto.oferta}"
                            data-vencimiento="${new Date(producto.vencimiento).toLocaleDateString()}">
                            Ver detalle
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    document.addEventListener("click", (e) => {

        // Comprar
        if (e.target.classList.contains("comprar")) {
            const nombre = e.target.dataset.nombre;
            const precio = e.target.dataset.precio;

            alert(`Agregaste al carrito:\n${nombre}\nPrecio: ${precio}`);
        }

        // Ver detalle
        if (e.target.classList.contains("detalle")) {
            const nombre = e.target.dataset.nombre;
            const precio = e.target.dataset.precio;
            const oferta = e.target.dataset.oferta;
            const vencimiento = e.target.dataset.vencimiento;

            alert(
                `Producto: ${nombre}
                Precio: ${precio}
                Oferta: ${oferta}
                Vencimiento: ${vencimiento}`
            );
        }

    });
});