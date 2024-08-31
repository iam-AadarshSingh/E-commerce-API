//1. Import Multer
import multer from 'multer';
//2. configure the storage with file and storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(
            null,
            new Date().toISOString() + file.originalname
        );
    },
});

export const upload = multer({ storage: storage });
