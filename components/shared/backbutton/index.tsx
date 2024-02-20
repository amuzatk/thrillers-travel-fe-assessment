// components/BackButton.tsx
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from '../../../styles/dashboard/BackButton.module.scss';

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className={styles.backButton} onClick={handleGoBack}>
      <AiOutlineArrowLeft size={20} />
      <span>Back</span>
    </div>
  );
};

export default BackButton;
