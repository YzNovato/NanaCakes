function trocar(tipo) {
    const branca = document.getElementById("massaBranca");
    const chocolate = document.getElementById("massaChocolate");

    if (tipo === "branca") {
        branca.style.display = "block";
        chocolate.style.display = "none";
    } else {
        branca.style.display = "none";
        chocolate.style.display = "block";
    }
}