import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIR = path.join(__dirname, 'public', 'images');

async function convertImageToWebP(filePath) {
    const fileExtension = path.extname(filePath).toLowerCase();

    if (!['.png', '.jpg', '.jpeg'].includes(fileExtension)) {
        return;
    }

    try {
        const baseName = path.basename(filePath, fileExtension);
        const dirName = path.dirname(filePath);
        const outputFilePath = path.join(dirName, `${baseName}.webp`);

        try {
            await fs.access(outputFilePath);
            console.log(`Übersprungen: ${path.basename(outputFilePath)} existiert bereits.`);
            return;
        } catch (error) {
            console.error(error);
        }

        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputFilePath);

        console.log(`Konvertiert: ${path.basename(filePath)} -> ${path.basename(outputFilePath)}`);

    } catch (error) {
        console.error(`Fehler bei der Konvertierung von ${filePath}:`, error.message);
    }
}

async function processDirectory(dir) {
    try {
        const items = await fs.readdir(dir);

        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stats = await fs.stat(fullPath);

            if (stats.isDirectory()) {
                await processDirectory(fullPath);
            } else if (stats.isFile()) {
                await convertImageToWebP(fullPath);
            }
        }
    } catch (error) {
        console.error(`Fehler beim Verarbeiten des Verzeichnisses ${dir}:`, error.message);
    }
}

async function runConverter() {
    console.log(`Starte WebP-Konvertierung in: ${IMAGE_DIR}`);
    await processDirectory(IMAGE_DIR);
    console.log('--- Konvertierung Abgeschlossen ---');
}

runConverter();