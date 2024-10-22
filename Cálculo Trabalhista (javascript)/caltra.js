function calcular(){
const  salario = parseFloat(document.getElementById('salario').value);

const VALE = parseFloat(document.getElementById('vale').value);

const deducoes = parseFloat(document.getElementById('dedu').value);

let resul = document.getElementById('resultado');




if (salario <= 1320)
{
    INSS = salario * 0.075;
}
else if (salario <= 2571.29)
{
    INSS = (salario - 1320) * 0.09 + 99;
}
else if (salario <= 3856.94)
{
    INSS = (salario - 2571.29) * 0.12 + 225.11;
}
else
{
    INSS = (salario - 3856.94) * 0.14 + 387.63;
}


 // Cálculo do IRPF
 if (salario <= 2112)
    {
        IRPF = 0;
    }
    else if (salario <= 2826.65)
    {
        IRPF = 0.075 * (salario - 2112);
    }
    else if (salario <= 3751.05)
    {
        IRPF = 0.15 * (salario - 2826.65) + 53.75;
    }
    else if (salario <= 4664.68)
    {
        IRPF = 0.225 * (salario - 3751.06) + 158.95;
    }
    else
    {
        IRPF = 0.275 * (salario - 4664.68) + 345.98;
    }

   const descontoINSS = INSS;
   const descontoIRPF = IRPF;

    if (VALE == "S")
        {
            VALE = salario * 0.06;
        }
     const descontovale = VALE

      const  salarioLiquido = (salario - descontoINSS - descontoIRPF - descontovale - deducoes);

      resul.innerHTML = `Salário bruto: R$ ${ salario}. \n Desconto INSS: - R$${descontoINSS.toFixed(2)}.\n Desconto IRPF: - R$${descontoIRPF.toFixed(2)}.\n Desconto Vale transporte: -R$${descontovale.toFixed(2)}.\n Outras deduções: -R$${deducoes.toFixed(2)}.\n Salário Liquido: R$${salarioLiquido.toFixed(2)}`
}