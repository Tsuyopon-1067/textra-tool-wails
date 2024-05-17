import { CircularProgress } from "@chakra-ui/react";
import styles from "./CircularProgressIndicator.module.css";

export const CircularProgressIndicator = () => {
  return (
    <div className={styles.progressIndicator__body}>
      <CircularProgress isIndeterminate color="blue.900" />
    </div>
  );
};
