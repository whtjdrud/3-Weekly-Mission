import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AddLink from '@/components/AddLink'
import SearchBar from '@/components/SearchBar'
import styles from '@/styles/folder.module.css'
import FolderBar from '@/components/FolderBar'
import { useState } from 'react'

const Folder = () => {
  const folders = [
    {
      id: '1',
      name: '12',
    },
  ]
  const [selectedFolderId, setSelectedFolderId] = useState('all')

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AddLink />
        <main className={styles.items}>
          <SearchBar />
          <div className={styles.folderBox}>
            <FolderBar folders={folders} onFolderClick={setSelectedFolderId} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Folder
