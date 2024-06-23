import { useQuasar } from "quasar";

export default function useNotify() {
  const $q = useQuasar();

  const notifySuccess = (message) => {
    $q.notify({
      type: "positive",
      message: message || "Tudo certo !",
    });
  };

  const notifyError = (message) => {
    $q.notify({
      type: "negative",
      message: message || "Algo errado não está certo !",
    });
  };

  return {
    notifySuccess,
    notifyError,
  };
}
