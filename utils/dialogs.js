export const warnindDialog = (msg) => {
  const dialog = document.getElementById("error-dialog");
  const warning = document.getElementById("error-message-text");
  warning.innerText = msg;
  dialog.showModal();
};
export const ConfirmOKDialog = (msg) => {
  const dialog = document.getElementById("confirm-ok-dialog");
  const warning = document.getElementById("confirm-ok-message-text");
  warning.innerText = msg;
  dialog.show();
  setTimeout(() => {
    dialog.close();
  }, 3000);
};

export const ConfirmDialogOpen = (msg) => {
  const dialog = document.getElementById("confirm-dialog");
  const warning = document.getElementById("confirm-message-text");
  warning.innerText = msg;
  dialog.showModal();
  return dialog;
};
