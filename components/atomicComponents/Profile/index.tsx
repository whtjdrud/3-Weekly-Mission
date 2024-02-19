import Image from 'next/image';
import styles from './profile.module.css';

interface ProfileProps {
  imageSource: string;
  email: string;
}

const Profile: React.FC<ProfileProps> = ({ email, imageSource }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={imageSource} alt="프로필 이미지" width={24} height={24} />
      <span className={styles.email}>{email}</span>
    </div>
  );
};

export default Profile;
