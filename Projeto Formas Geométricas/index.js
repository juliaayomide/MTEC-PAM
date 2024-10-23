function Formas(){
    const valor = Number(document.getElementById("input").value);
 
  switch (valor) {
    case 3:
        document.getElementById("img").src = "./img/Triangulo-removebg-preview.png";
        document.getElementById("perimetro").innerText= "Perímetro = a+b+c"
        document.getElementById("area").innerText = "Área = b*a/2"
        document.getElementById("nome").innerText = "Triângulo"
        break;
    case 4:
            document.getElementById("img").src = "./img/Quadrado-removebg-preview.png";
            document.getElementById("perimetro").innerText = "Perímetro = 4*L";
            document.getElementById("area").innerText = "Área = L²";
            document.getElementById("nome").innerText = "Quadrado"
            break;
            case 5:
            document.getElementById("img").src = "./img/Pentagono-removebg-preview.png";
            document.getElementById("perimetro").innerText = "Perímetro = 5*L";
            document.getElementById("area").innerText = "Área = 5*L*a";
            document.getElementById("nome").innerText = "Pentágono"
                break;
            case 6:
            document.getElementById("img").src = "./img/Hexagono-removebg-preview.png";
            document.getElementById("perimetro").innerText = "Perímetro = 6*L";
            document.getElementById("area").innerText = "Área = 3L²√3 / 2";
            document.getElementById("nome").innerText = "Hexágono"
            break;
        case 7:
            document.getElementById("img").src = "./img/Heptagono-removebg-preview.png";
            document.getElementById("perimentro").innerText = "Perímetro = 7*L";
            document.getElementById("area").innerText = "Área = (7/2)*L*a";
            document.getElementById("nome").innerText = "Heptágono"
            break;
        case 8:
            document.getElementById("img").src = "./img/Octagono-removebg-preview.png";
            document.getElementById("perimetro").innerText = "Perímetro = 8*L";
            document.getElementById("area").innerText = "Área = 4*L*a";
            document.getElementById("nome").innerText = "Octágono"
            break;
        case 9:
            document.getElementById("img").src = "./img/Éneagono-removebg-preview.png";
            document.getElementById("perimetro").innerText = "Perímetro = 9*L";
            document.getElementById("area").innerText = "Área = P*a/2";
            document.getElementById("nome").innerText = "Eneágono"
            break;
        case 10:
            document.getElementById("img").src = "./img/Decagono-removebg-preview.png";
            document.getElementById("perimetro").innerText = "Perímetro = 10*L";
            document.getElementById("area").innerText = "Área =  n*Aₜ = (n*L*a)/ 2";
            document.getElementById("nome").innerText = "Decágono"
            break;
    default:
        document.getElementById("area").innerText = "Forma não localizada ou inexistente no catálogo.";
        document.getElementById("img").src = "";
            document.getElementById("perimetro").innerText = "";
            document.getElementById("espace").innerText = "";
            document.getElementById("nome").innerText = ""
            break;
}
}
