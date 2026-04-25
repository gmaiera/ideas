const copyButton = document.querySelector("[data-copy-reply]");
const replyText = document.querySelector("#replyText");
const status = document.querySelector(".copy-status");

copyButton?.addEventListener("click", async () => {
  const text = replyText?.textContent?.replace(/\s+/g, " ").trim();

  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "Resposta copiada.";
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    status.textContent = copied
      ? "Resposta copiada."
      : "Selecione o texto acima para copiar.";
  }
});
