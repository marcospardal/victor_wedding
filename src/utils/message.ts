const phoneNumber = "88993364626";

function buildConfirmationMessage(guest: string, companions: Companions[]) {
  let finalMessage = `Eu, ${guest}, confirmo presença no casamento de Victor e Raissa, no dia 22 de novembro de 2025.`;

  if (companions.length) {
    finalMessage += ' Estarei levando como convidados: ';

    companions.forEach(companion => {
      finalMessage += `${companion.name} - ${companion.type}, `;
    });

    finalMessage = finalMessage.slice(0, finalMessage.length - 2);
  }

  const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${finalMessage}&app_absent=0`;
  window.open(url);
}

export default buildConfirmationMessage;