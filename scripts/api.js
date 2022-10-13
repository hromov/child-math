const isLocal = () =>
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

const baseURL = isLocal() ? "" : "https://hromov.github.io/child-math";

export default async function GetImages() {
    const response = await fetch(`${baseURL}/api/images.txt`);
    const imagesString = await response.text();
    const images = imagesString.split(/\r|\n/).map((el) => baseURL + el.trim());
    return images;
}
