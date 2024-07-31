/**
 * Enhances the contrast of an image by adjusting the luminance of its regions.
 * 
 * @param {ImageData} imageData - The image data to process.
 * @return {ImageData} - The processed image data with enhanced contrast.
 */
function enhanceContrast(imageData) {
    const width = imageData.width;
    const height = imageData.height;
    const data = imageData.data;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            
            // Calculate luminance of the current pixel
            const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

            /// corresponding part of the original view. Regions of lower luminance
            if (luminance < 128) {
                // Increase contrast for darker regions
                data[index] = Math.max(0, r - 30);
                data[index + 1] = Math.max(0, g - 30);
                data[index + 2] = Math.max(0, b - 30);
            } else {
                // Decrease contrast for lighter regions
                data[index] = Math.min(255, r + 30);
                data[index + 1] = Math.min(255, g + 30);
                data[index + 2] = Math.min(255, b + 30);
            }
        }
    }

    return imageData;
}
