import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from "./firebase-init.js";

/**
 * Upload non signé vers Cloudinary. Aucun secret Cloudinary utilisé —
 * uniquement le cloud name public et un upload preset conçu pour être
 * appelé depuis le navigateur (fonctionnalité native de Cloudinary).
 * @param {File} file
 * @param {string} folder
 * @param {(pct:number)=>void} onProgress
 * @returns {Promise<string>} l'URL sécurisée du média uploadé
 */
export function uploadToCloudinary(file, folder = "konfortech", onProgress) {
  const resourceType = file.type.startsWith("video/") ? "video" : file.type === "application/pdf" ? "raw" : "image";
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", folder);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.upload.onprogress = (e) => { if (onProgress && e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100)); };
    xhr.onload = () => {
      try {
        const data = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300) resolve(data.secure_url);
        else reject(new Error(data.error?.message || "Échec de l'upload Cloudinary"));
      } catch (err) { reject(err); }
    };
    xhr.onerror = () => reject(new Error("Erreur réseau pendant l'upload Cloudinary"));
    xhr.send(formData);
  });
}

/** URL Cloudinary transformée (thumbnail responsive, format auto, qualité auto). */
export function cldThumb(url, width = 300, height = 200) {
  if (!url || !url.includes("/upload/")) return url;
  return url.replace("/upload/", `/upload/w_${width},h_${height},c_fill,f_auto,q_auto/`);
}
