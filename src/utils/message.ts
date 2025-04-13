const phoneNumber = "8899702957";

function buildConfirmationMessage(guest: string, companions: Companions[]) {
  let finalMessage = `Eu, ${guest}, confirmo presença no casamento de Victor e Raissa, no dia 22 de novembro de 2025.`;

  if (companions.length) {
    finalMessage += " Estarei levando como convidados: ";

    companions.forEach((companion) => {
      finalMessage += `${companion.name} - ${companion.type}, `;
    });

    finalMessage = finalMessage.slice(0, -2);
  }

  const encodedMessage = encodeURIComponent(finalMessage);

  const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

  const url = isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(url);
}

export default buildConfirmationMessage;