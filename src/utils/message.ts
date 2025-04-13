const phoneNumber = "5588999702957"; // DDI + DDD + número (muito importante!)

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

  const mobileURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const desktopURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  // 📱 iPhone/Android → redireciona direto
  if (isMobile) {
    window.location.href = mobileURL;
  } else {
    // 💻 Desktop → abre em nova aba
    window.open(desktopURL, "_blank");
  }
}

export default buildConfirmationMessage;