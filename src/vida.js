function calcularIMC() {
    const nome = document.getElementById("nome").value;
    const sexo = document.getElementById("sexo").value;
    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value); 
    const estiloDeVida = document.getElementById("estiloDeVida").value;
    const alertaDiv = document.getElementById("alerta"); 
    const alertaSexo = document.getElementById("alertaSexo"); 
    const alertaEstiloDeVida = document.getElementById("alertaEstiloDeVida"); 

  
    if (sexo === "") {
        alertaSexo.innerHTML = "Por favor, selecione o sexo.";
        alertaSexo.style.display = "block"; 
        return;
    } else {
        alertaSexo.innerHTML = "";
        alertaSexo.style.display = "none"; 
    }

  
    if (estiloDeVida === "") {
        alertaEstiloDeVida.innerHTML = "Por favor, selecione o estilo de vida.";
        alertaEstiloDeVida.style.display = "block"; 
        return;
    } else {
        alertaEstiloDeVida.innerHTML = "";
        alertaEstiloDeVida.style.display = "none"; 
    }


    if (
        nome === "" ||
        isNaN(idade) ||
        isNaN(peso) ||
        isNaN(altura)
    ) {
        alertaDiv.innerHTML = "Por favor, preencha todos os campos obrigatórios (Nome, Idade, Peso e Altura).";
        alertaDiv.style.display = "block"; 
        return;
    }

    
    alertaDiv.innerHTML = "";
    alertaDiv.style.display = "none"; 


    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    let recomendacaoEstiloDeVida = "";
    let bmr = 0;
    let necessidadeCaloricaDiaria = 0;

    if (sexo === "masculino") {
        bmr = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    } else if (sexo === "feminino") {
        bmr = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
    }

    if (estiloDeVida === "sedentario") {
        necessidadeCaloricaDiaria = bmr * 1.2;
        recomendacaoEstiloDeVida = "Como você é sedentário, sua necessidade calórica diária é menor. Evite excesso de calorias para manter um peso saudável.";
    } else if (estiloDeVida === "esportista") {
        necessidadeCaloricaDiaria = bmr * 1.55;
        recomendacaoEstiloDeVida = "Mantenha uma rotina saudável de atividade física para manter seu peso e saúde.";
    } else {
        necessidadeCaloricaDiaria = bmr * 1.375;
        recomendacaoEstiloDeVida = "Mantenha um estilo de vida equilibrado e uma alimentação saudável.";
    }

    if (imc < 18.5) {
        recomendacaoEstiloDeVida = "Você está abaixo do peso. Consulte um médico ou nutricionista para orientação. " + recomendacaoEstiloDeVida;
    } else if (imc >= 18.5 && imc < 24.9) {
        recomendacaoEstiloDeVida = "Seu peso está dentro da faixa saudável. " + recomendacaoEstiloDeVida;
    } else if (imc >= 24.9 && imc < 29.9) {
        recomendacaoEstiloDeVida = "Você está com sobrepeso. Considere aumentar a atividade física e melhorar a dieta. " + recomendacaoEstiloDeVida;
    } else {
        recomendacaoEstiloDeVida = "Você está obeso. Consulte um médico ou nutricionista para orientação. " + recomendacaoEstiloDeVida;
    }

    const resultadoHTML = "Nome: " + nome + "<br>" +
        "Sexo: " + sexo + "<br>" +
        "Idade: " + idade + " anos<br>" +
        "Peso: " + peso + " kg<br>" +
        "Altura: " + altura + " cm<br>" +
        "IMC: " + imc.toFixed(2) + "<br>" +
        "Recomendação de Estilo de Vida: " + recomendacaoEstiloDeVida + "<br>" +
        "Necessidade Calórica Diária: " + necessidadeCaloricaDiaria.toFixed(2) + " kcal";

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
